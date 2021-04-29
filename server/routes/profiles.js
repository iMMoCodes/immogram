import express from 'express'

import { auth } from '../middleware/auth.js'
import { getProfile, followUser, unfollowUser, updatePic } from '../controllers/profile.js'

const router = express.Router()

router.get('/:id', auth, getProfile)
router.patch('/follow', auth, followUser)
router.patch('/unfollow', auth, unfollowUser)
router.patch('/updatepic', auth, updatePic)

export default router
