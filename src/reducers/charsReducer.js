const defConfig = {
	chars: [],
	lastUpdated: new Date().toLocaleTimeString()
}

// export const charsReducer = (state = [], action) => {
// 	switch (action.type) {
// 		case 'FETCH_CHARS':
// 			return [...action.payload]

// 		default:
// 			return state
// 	}
// }

export const charsReducer = (state = defConfig, action) => {
	switch (action.type) {
		case 'FETCH_CHARS':
			return {
				...state,
				chars: [...action.payload],
				lastUpdated: new Date().toLocaleTimeString()
			}

		default:
			return state
	}
}
