import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema.Types

// Create user Schema
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
	followers: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
	following: [
		{
			type: ObjectId,
			ref: 'User',
		},
	],
})

// Export Schema
export default mongoose.model('User', userSchema)
