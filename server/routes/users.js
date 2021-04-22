import express from 'express'

import { signup } from '../controllers/user.js'

// Setup router
const router = express.Router()

// Routes
router.get('/', (req, res) => {
	res.send('Hello')
})

router.post('/signup', signup)

// Export router
export default router
