import mongoose from 'mongoose'

// Connect to User Schema
const { ObjectId } = mongoose.Schema.Types

// Create post Schema
const postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	body: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: true,
	},
	createdBy: {
		type: ObjectId,
		ref: 'User',
	},
})

// Export Schema
export default mongoose.model('Post', postSchema)
