import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const auth = (req, res, next) => {
	// Get authorization from request header
	const { authorization } = req.headers
	// Check if authorization is not there
	if (!authorization) {
		return res.status(401).json({ error: 'You are not logged in.' })
	}
	// Get just the token part
	const token = authorization.replace('Bearer ', '')
	// Verify that it's the same token
	jwt.verify(token, process.env.JWT_SECRET, (error, payload) => {
		if (error) {
			return res.status(401).json({ error: 'You are not logged in.' })
		}
		// Get user by id
		const { id } = payload
		User.findById(id).then((userData) => {
			// Attach information to req.user
			req.user = userData
			next()
		})
	})
}
