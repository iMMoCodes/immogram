import * as actionType from '../constants/actionTypes'

export const userReducer = (state = null, action) => {
	switch (action.type) {
		case actionType.USER:
			return action.payload
		default:
			return state
	}
}
