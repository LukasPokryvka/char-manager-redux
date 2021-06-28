const defaultConfig = {
	response: '',
	alreadyRegistered: null,
	somethingWrong: null
}

export const registerReducer = (
	state = defaultConfig,
	action
) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...state,
				response: action.payload.response,
				alreadyRegistered: action.payload.alreadyRegistered,
				somethingWrong: action.payload.somethingWrong
			}

		case 'REGISTER_ERROR':
			return {
				...state,
				response: action.payload.response,
				alreadyRegistered: action.payload.alreadyRegistered,
				somethingWrong: action.payload.somethingWrong
			}

		case 'REGISTER_RESET':
			return {
				...state,
				response: defaultConfig.response,
				alreadyRegistered: defaultConfig.alreadyRegistered,
				somethingWrong: defaultConfig.somethingWrong
			}

		default:
			return state
	}
}
