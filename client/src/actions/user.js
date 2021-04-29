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

export const updateUser = (following, followers) => {
	return {
		type: actionType.UPDATE_USER,
		payload: { following, followers },
	}
}

export const updateUserPic = (newURL) => {
	return {
		type: actionType.UPDATE_PROFILE_PIC,
		payload: newURL,
	}
}
