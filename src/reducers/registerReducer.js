const defaultConfig = {
	success: null,
	error: null,
	resolution: ''
}

export const registerReducer = (
	state = defaultConfig,
	action
) => {
	switch (action.type) {
		case 'REGISTER_USER':
			return {
				...state,
				success: action.payload.success,
				error: action.payload.error,
				resolution: action.payload.resolution
			}

		case 'REGISTER_ERROR':
			return {
				...state,
				success: action.payload.success,
				error: action.payload.error,
				resolution: action.payload.resolution
			}

		case 'REGISTER_RESET':
			return {
				...state,
				success: defaultConfig.success,
				error: defaultConfig.error,
				resolution: defaultConfig.resolution
			}

		default:
			return state
	}
}
