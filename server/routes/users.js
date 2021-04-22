import express from 'express'

import { signin, signup } from '../controllers/user.js'

// Setup router
const router = express.Router()

// Routes
router.post('/signup', signup)
router.post('/signin', signin)

// Export router
export default router
