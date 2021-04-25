import * as actionType from '../constants/actionTypes'

export const setUser = (userInfo) => {
	return {
		type: actionType.SET_USER,
		payload: userInfo,
	}
}

export const logOut = () => {
	return {
		type: actionType.LOGOUT,
	}
}
