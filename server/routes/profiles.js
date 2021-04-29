import express from 'express'

import { auth } from '../middleware/auth.js'
import { getProfile } from '../controllers/profile.js'

const router = express.Router()

router.get('/:id', auth, getProfile)

export default router
