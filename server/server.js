import express from 'express'
import dotenv from 'dotenv'

dotenv.config()
// Initialize app
const app = express()
// Create Port
const PORT = process.env.PORT || 5000
// Test route
app.get('/', (req, res) => {
	res.send('hello')
})
// Listen
app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`)
})
