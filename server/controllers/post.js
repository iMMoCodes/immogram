import mongoose from 'mongoose'
import Post from '../models/post.js'

// Get all posts
export const getPosts = (req, res) => {
	// Find all posts
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

// Get own posts
export const getOwnPosts = (req, res) => {
	// Find posts that are created by user
	Post.find({ createdBy: req.user._id })
		// Turn ObjectId to actual fields
		.populate('createdBy', '_id name')
		.then((myPosts) => {
			res.json({ myPosts })
		})
		.catch((err) => {
			console.log(err)
		})
}
