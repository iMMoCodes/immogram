import express from 'express'

import { auth } from '../middleware/auth.js'
import { createPost, getPosts, getOwnPosts, likePost, dislikePost, createComment, deletePost, deleteComment } from '../controllers/post.js'

// Setup router
const router = express.Router()

// Routes
router.get('/', auth, getPosts)
router.get('/ownposts', auth, getOwnPosts)
router.post('/create', auth, createPost)
router.patch('/like', auth, likePost)
router.patch('/dislike', auth, dislikePost)
router.patch('/comment', auth, createComment)
router.patch('/delete/comment', auth, deleteComment)
router.delete('/delete/:postId', auth, deletePost)

// Export router
export default router
