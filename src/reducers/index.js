import { combineReducers } from 'redux'
import { charsReducer } from './charsReducer'
import { registerReducer } from './registerReducer'
import { loginReducer } from './loginReducer'

export default combineReducers({
	chars: charsReducer,
	regUser: registerReducer,
	login: loginReducer
})
