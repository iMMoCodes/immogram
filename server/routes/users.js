import express from 'express'

import { auth } from '../middleware/auth.js'
import { signin, signup } from '../controllers/user.js'

// Setup router
const router = express.Router()

router.get('/needsauth', auth, (req, res) => {
	res.send('YOU GOT IT')
})

// Routes
router.post('/signup', signup)
router.post('/signin', signin)

// Export router
export default router
