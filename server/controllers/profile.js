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

// Follow
// If someone follows -> other users followers +1 -> user following +1
export const followUser = (req, res) => {
	// Find the person to follow
	User.findByIdAndUpdate(
		req.body.followId,
		{
			// Push logged in ID to other persons followers
			$push: { followers: req.user._id },
		},
		{ new: true, useFindAndModify: false },
		(err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			}
			// Find the logged in user
			User.findByIdAndUpdate(
				req.user._id,
				{
					// Push the other users ID to logged in users following array
					$push: { following: req.body.followId },
				},
				{ new: true, useFindAndModify: false }
			)
				// Remove password
				.select('-password')
				.then((result) => {
					res.json(result)
				})
				.catch((err) => {
					return res.status(422).json({ error: err })
				})
		}
	)
}

// Unfollow
export const unfollowUser = (req, res) => {
	// Find the person to unfollow
	User.findByIdAndUpdate(
		req.body.unfollowId,
		{
			// Pull logged in ID to other persons followers
			$pull: { followers: req.user._id },
		},
		{ new: true, useFindAndModify: false },
		(err, result) => {
			if (err) {
				return res.status(422).json({ error: err })
			}
			// Find the logged in user
			User.findByIdAndUpdate(
				req.user._id,
				{
					// Pull the other users ID from logged in users following array
					$pull: { following: req.body.unfollowId },
				},
				{ new: true, useFindAndModify: false }
			)
				// Remove password
				.select('-password')
				.then((result) => {
					res.json(result)
				})
				.catch((err) => {
					return res.status(422).json({ error: err })
				})
		}
	)
}

// Update Pic
export const updatePic = (req, res) => {
	// Find currently logged in user
	User.findByIdAndUpdate(
		req.user._id,
		// Set picture
		{ $set: { picture: req.body.picture } },
		// Options
		{ new: true, useFindAndModify: false }
	)
		// Remove password
		.select('-password')
		.then((result) => {
			res.json(result)
		})
		.catch((err) => {
			return res.status(422).json({ error: err })
		})
}

// Search users
export const searchUser = (req,res) => {
	// Pattern that user writes
	let userPattern = new RegExp('^'+req.body.query)
	// Find user by name & pattern
	User.find({name:{$regex:userPattern}})
	// Get id,pic and name
	.select('_id name picture')
	.then(user => {
		res.json({user})
	})
	.catch(err => {
		console.log(err)
	})
}