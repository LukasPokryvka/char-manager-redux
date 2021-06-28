import charManager from '../apis/charManager'

export const fetchChars = (charId) => async (dispatch) => {
	charManager
		.get('/getChars', {
			params: {
				acc: charId
			}
		})
		.then((response) => {
			dispatch({
				type: 'FETCH_CHARS',
				payload: response.data
			})
		})
		.catch((error) => {
			dispatch({
				type: 'CHARS_ERROR',
				payload: error.response.data
			})
		})
}

export const loginUser =
	(userId, userPwd) => (dispatch) => {
		charManager
			.get('/login', {
				params: {
					id: userId,
					pw: userPwd
				}
			})
			.then((response) => {
				dispatch({
					type: 'LOGIN_USER',
					payload: response.data
				})
			})
			.catch((error) => {
				dispatch({
					type: 'LOGIN_ERROR',
					payload: error.response.data
				})
			})
	}

export const logoutUser = () => {
	return {
		type: 'LOGOUT_USER'
	}
}

export const registerUser = (userEmail) => (dispatch) => {
	charManager
		.get('/register', {
			params: {
				email: userEmail
			}
		})
		.then((response) => {
			dispatch({
				type: 'REGISTER_USER',
				payload: response.data
			})
		})
		.catch((error) => {
			dispatch({
				type: 'REGISTER_ERROR',
				payload: error.response.data
			})
		})
}

export const registrationReset = () => {
	return {
		type: 'REGISTER_RESET'
	}
}
