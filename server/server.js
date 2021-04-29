import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

// Models
import User from './models/user.js'
import Post from './models/post.js'

// Routes
import userRoutes from './routes/users.js'
import postRoutes from './routes/post.js'
import profileRoutes from './routes/profiles.js'

// Initialize app
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

// Middleware

// Routes
app.use('/user', userRoutes)
app.use('/post', postRoutes)
app.use('/profile', profileRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// Listen
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
