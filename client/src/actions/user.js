import * as actionType from '../constants/actionTypes'

export const userInfo = (userInfo) => {
	return {
		type: actionType.USER,
		payload: userInfo,
	}
}

export const logOut = () => {
	return {
		type: actionType.LOGOUT,
	}
}
