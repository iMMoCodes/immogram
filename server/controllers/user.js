import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

// Sign Up
export const signup = (req, res) => {
	// Get data from request
	const { name, email, password } = req.body
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
				})
				// Save user
				user.save()
					.then((user) => {
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
		bcrypt.compare(password, savedUser.password)
			.then((doMatch) => {
				// Passwords match
				if (doMatch) {
					// Create token for user
					const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET)
					res.json({ token })
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
