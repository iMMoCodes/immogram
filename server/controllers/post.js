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
	const { title, body, picture } = req.body
	// Check if title, message and picture are there
	if (!title || !body || !picture) {
		return res.status(422).json({ error: 'Please fill all the fields.' })
	}
	// Hide password before adding
	req.user.password = undefined
	// Add data to model
	const post = new Post({
		title,
		body,
		picture,
		createdBy: req.user,
		createdAt: new Date().toISOString(),
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

// Like post
export const likePost = (req, res) => {
	// Get post by ID that is sent
	Post.findByIdAndUpdate(
		req.body.postId,
		{
			// Push ID to likes array
			$push: { likes: req.user._id },
		},
		// To get a new version
		{
			new: true,
			useFindAndModify: false,
		}
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err })
		} else {
			res.json(result)
		}
	})
}

// UnLike post
export const unlikePost = (req, res) => {
	// Get post by ID that is sent
	Post.findByIdAndUpdate(
		req.body.postId,
		{
			// Pull ID from likes array
			$pull: { likes: req.user._id },
		},
		// To get a new version
		{
			new: true,
			useFindAndModify: false,
		}
	).exec((err, result) => {
		if (err) {
			return res.status(422).json({ error: err })
		} else {
			res.json(result)
		}
	})
}
