import express from 'express'

import { signin, signup, resetPassword, newPassword } from '../controllers/user.js'

// Setup router
const router = express.Router()

// Routes
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/reset-password', resetPassword)
router.post('/new-password',newPassword)

// Export router
export default router
