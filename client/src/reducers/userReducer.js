import * as actionType from '../constants/actionTypes'

export const userReducer = (state = null, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return action.payload
		case actionType.LOGOUT:
			return null
		case actionType.UPDATE_USER:
			return {
				...state,
				followers: action.payload.followers,
				following: action.payload.following,
			}
		case actionType.UPDATE_PROFILE_PIC:
			return {
				...state,
				picture: action.payload,
			}
		default:
			return state
	}
}
