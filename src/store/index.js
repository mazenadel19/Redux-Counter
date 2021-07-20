import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth-slice'
import counterSlice from './counter-slice'

//state
const store = configureStore(
	{ reducer: { counter: counterSlice, auth: authSlice } },
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // <-- redux devtools
)


export default store
