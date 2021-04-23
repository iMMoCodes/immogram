import express from 'express'

import { auth } from '../middleware/auth.js'
import { createPost, getPosts } from '../controllers/post.js'

// Setup router
const router = express.Router()

// Routes
router.get('/', getPosts)
router.post('/create', auth, createPost)

// Export router
export default router
