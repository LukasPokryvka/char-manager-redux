import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
	createStore,
	applyMiddleware,
	compose
} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './components/App'
import reducers from './reducers'

const persistConfig = {
	key: 'root',
	storage: storage,
	blacklist: ['chars', 'regUser']
}

const persistedReducer = persistReducer(
	persistConfig,
	reducers
)

const composeEnahncers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	persistedReducer,
	composeEnahncers(applyMiddleware(thunk))
)
const persistor = persistStore(store)

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.querySelector('#root')
)
