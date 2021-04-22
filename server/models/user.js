import mongoose from 'mongoose'

// Create Schema
const userSchema = mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
})

// Export Schema
export default mongoose.model('User', userSchema)
