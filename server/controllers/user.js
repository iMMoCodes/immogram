import User from '../models/user.js'

export const signup = (req, res) => {
	const { name, email, password } = req.body
	if (!name || !email || !password) {
		return res.status(422).json({ error: 'Please fill all the fields.' })
	}
	return res.status(201).json({ message: 'Succesfully sent.' })
}
