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
	post
		.save()
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
	)
		.populate('comments.createdBy', '_id name')
		.populate('createdBy', '_id name')
		.exec((err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			} else {
				res.json(result)
			}
		})
}

// UnLike post
export const dislikePost = (req, res) => {
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
	)
		.populate('comments.createdBy', '_id name')
		.populate('createdBy', '_id name')
		.exec((err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			} else {
				res.json(result)
			}
		})
}

// Create comment
export const createComment = (req, res) => {
	const comment = {
		text: req.body.text,
		createdBy: req.user._id,
	}
	// Get post by ID that is sent
	Post.findByIdAndUpdate(
		req.body.postId,
		{
			// Push comment to comment array
			$push: { comments: comment },
		},
		// To get a new version
		{
			new: true,
			useFindAndModify: false,
		}
	)
		// Get id and name from _id
		.populate('comments.createdBy', '_id name')
		.populate('createdBy', '_id name')
		.exec((err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			} else {
				res.json(result)
			}
		})
}

// Delete post
export const deletePost = (req, res) => {
	// Get postId from req.params
	Post.findOne({ _id: req.params.postId })
		.populate('createdBy', '_id')
		.exec((err, post) => {
			// Check if post exists
			if (err || !post) {
				return res.status(422).json({ error: err })
			}
			// Check that post creator matches logged user
			// Need to convert to string because ObjectId
			if (post.createdBy._id.toString() === req.user._id.toString()) {
				// Remove post
				post
					.remove()
					.then((result) => {
						res.json(result)
					})
					.catch((err) => {
						console.log(err)
					})
			}
		})
}

// Delete comment
export const deleteComment = (req, res) => {
	const comment = {
		text: req.body.text,
		createdBy: req.user._id,
	}
	// Get post by ID that is sent
	Post.findByIdAndUpdate(
		req.body.postId,
		{
			// Pull comment from comments array
			$pull: { comments: comment },
		},
		// To get a new version
		{
			new: true,
			useFindAndModify: false,
		}
	)
		// Get id and name from _id
		.populate('comments.createdBy', '_id name')
		.populate('createdBy', '_id name')
		.exec((err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			} else {
				res.json(result)
			}
		})
}
