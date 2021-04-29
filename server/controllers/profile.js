import User from '../models/user.js'
import Post from '../models/post.js'

export const getProfile = (req, res) => {
	// Find user by id
	User.findOne({ _id: req.params.id })
		// remove password
		.select('-password')
		.then((user) => {
			// Get posts created by the user
			Post.find({ createdBy: req.params.id })
				.populate('createdBy', '_id name')
				.exec((err, posts) => {
					if (err) {
						return res.status(422).json({ error: err })
					}
					res.json({ user, posts })
				})
		})
		.catch((err) => {
			return res.status(404).json({ error: 'User not found.' })
		})
}
