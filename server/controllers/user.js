import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import crypto from 'crypto'
import User from '../models/user.js'
import nodemailer from 'nodemailer'
import sendgridTransport from 'nodemailer-sendgrid-transport'
import dotenv from 'dotenv'
dotenv.config()

// Email setup
const transporter = nodemailer.createTransport(
	sendgridTransport({
		auth: {
			api_key: process.env.SENDGRID_KEY,
		},
	})
)

// Sign Up
export const signup = (req, res) => {
	// Get data from request
	const { name, email, password, picture } = req.body
	// Check if all field are filled
	if (!name || !email || !password) {
		return res.status(422).json({ error: 'Please fill all the fields.' })
	}
	// Check if user with that email already exists
	User.findOne({ email })
		.then((savedUser) => {
			if (savedUser) {
				return res.status(422).json({ error: 'User already exists with that email.' })
			}
			// Hash the password
			bcrypt.hash(password, 10).then((hashedPassword) => {
				// Add data to model
				const user = new User({
					name,
					email,
					password: hashedPassword,
					picture,
				})
				// Save user
				user
					.save()
					.then((user) => {
						// Send email to user
						transporter
							.sendMail({
								to: user.email,
								from: 'immocodesit@gmail.com',
								subject: 'Succesfully signed up',
								html: '<h1>Welcome to Immogram</h1>',
							})
							.catch((err) => {
								console.log(err)
							})
						res.status(201).json({ message: 'User succesfully saved.' })
					})
					.catch((err) => {
						console.log(err)
					})
			})
		})
		.catch((err) => {
			console.log(err)
		})
}

// Sign in
export const signin = (req, res) => {
	const { email, password } = req.body
	// Check if email and password are there
	if (!email || !password) {
		return res.status(422).json({ error: 'Please provide email and password.' })
	}
	// Check user by email
	User.findOne({ email: email }).then((savedUser) => {
		if (!savedUser) {
			return res.status(422).json({ error: 'Invalid email or password.' })
		}
		// Compare passwords
		bcrypt
			.compare(password, savedUser.password)
			.then((doMatch) => {
				// Passwords match
				if (doMatch) {
					// Create token for user
					const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET)
					// Destructure data from saved user
					const { _id, name, email, followers, following, picture } = savedUser
					// Send back token and user
					res.json({ token, user: { _id, name, email, followers, following, picture } })
				}
				// Passwords don't match
				else {
					return res.status(422).json({ error: 'Invalid email or password.' })
				}
			})
			.catch((err) => {
				console.log(err)
			})
	})
}

export const resetPassword = (req,res) => {
	// Create token
	crypto.randomBytes(32,(err,buffer) => {
		if(err) {
			console.log(err)
		}
		const token = buffer.toString("hex")
		// Find user by email
		User.findOne({email:req.body.email})
		.then(user => {
			// Check that user exists
			if(!user) {
				return res.status(422).json({error: "User doesn't exists with that email."})
			}
			// Apply token to user
			user.resetToken = token
			// Token lasts for 30min
			user.expireToken = Date.now() + 1800000
			// Save user and send email
			// !! CHANGE LINK !!
			user.save().then((result) => {
				transporter.sendMail({
					to: user.email,
					from: 'immocodesit@gmail.com',
					subject: "Password reset request",
					html: `
					<p>You have requested for a password reset.</p>
					<h5>Click this <a href="http://localhost:3000/reset-password/${token}">link </a> to reset password.</h5>
					`
				})
				res.json({message: "Check your email."})
			})
		})
	}) 
}

export const newPassword = (req,res) => {
	const newPassword = req.body.password
	const userToken = req.body.token
	User.findOne({resetToken: userToken, expireToken:{$gt: Date.now()}})
	.then(user => {
		if(!user) {
			return res.status(422).json({error: "Try again, session expired."})
		}
		bcrypt.hash(newPassword,12).then(newHashedPassword => {
			user.password = newHashedPassword
			user.resetToken = undefined
			user.expireToken = undefined
			user.save().then((savedUser) => {
				res.json({message: "Password updated succesfully."})
			})
		})
	}).catch(err => {
		console.log(err)
	})
}