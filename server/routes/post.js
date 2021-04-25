import express from 'express'

import { auth } from '../middleware/auth.js'
import { createPost, getPosts, getOwnPosts, likePost, unlikePost } from '../controllers/post.js'

// Setup router
const router = express.Router()

// Routes
router.get('/', auth, getPosts)
router.get('/ownposts', auth, getOwnPosts)
router.post('/create', auth, createPost)
router.patch('/like', auth, likePost)
router.patch('/unlike', auth, unlikePost)

// Export router
export default router
