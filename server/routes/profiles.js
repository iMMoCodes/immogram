import express from 'express'

import { auth } from '../middleware/auth.js'
import { getProfile, followUser, unfollowUser } from '../controllers/profile.js'

const router = express.Router()

router.get('/:id', auth, getProfile)
router.patch('/follow', auth, followUser)
router.patch('/unfollow', auth, unfollowUser)

export default router
