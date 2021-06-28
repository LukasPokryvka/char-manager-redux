const defConfig = {
	email: null,
	accId: null,
	isLoggedIn: null
}

export const loginReducer = (state = defConfig, action) => {
	switch (action.type) {
		case 'LOGIN_USER':
			return {
				...state,
				email: action.payload.email,
				accId: action.payload.accId,
				isLoggedIn: action.payload.successful
			}

		case 'LOGIN_ERROR':
			return {
				...state,
				email: action.payload.email,
				accId: action.payload.accId,
				isLoggedIn: action.payload.successful
			}

		case 'LOGOUT_USER':
			return {
				...state,
				email: null,
				accId: null,
				isLoggedIn: null
			}

		default:
			return state
	}
}
