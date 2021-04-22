import mongoose from 'mongoose'
import User from '../models/user.js'

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
			// Add data to model
			const user = new User({
				name,
				email,
				password,
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
		.catch((err) => {
			console.log(err)
		})
}
