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
	picture: {
		type: String,
		default: 'https://res.cloudinary.com/immocodes/image/upload/v1619716901/pexels-photo-1561020_jy55ef.jpg',
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
