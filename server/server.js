import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

// Initialize app
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// Middleware

// Connect to DB
mongoose.connect(process.env.MONGO_DB_CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

// Listen
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
