import * as actionType from '../constants/actionTypes'

export const userInfo = (userInfo) => {
	return {
		type: actionType.USER,
		payload: userInfo,
	}
}
