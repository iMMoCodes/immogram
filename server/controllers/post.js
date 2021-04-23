import mongoose from 'mongoose'
import Post from '../models/post.js'

// Get posts
export const getPosts = (req, res) => {
	Post.find()
		// Turn ObjectId to actual fields
		.populate('createdBy', '_id name')
		// Return posts
		.then((posts) => {
			res.json({ posts })
		})
		.catch((err) => {
			console.log(err)
		})
}

// Create post
export const createPost = (req, res) => {
	// Get data from request
	const { title, body } = req.body
	// Check if title and message are there
	if (!title || !body) {
		return res.status(422).json({ error: 'Please fill all the fields.' })
	}
	// Hide password before adding
	req.user.password = undefined
	// Add data to model
	const post = new Post({
		title,
		body,
		createdBy: req.user,
	})
	// Save post
	post.save()
		.then((result) => {
			res.json({ post: result })
		})
		.catch((err) => {
			console.log(err)
		})
}
