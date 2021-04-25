import * as actionType from '../constants/actionTypes'

export const userReducer = (state = null, action) => {
	switch (action.type) {
		case actionType.SET_USER:
			return action.payload
		case actionType.LOGOUT:
			return null
		default:
			return state
	}
}
