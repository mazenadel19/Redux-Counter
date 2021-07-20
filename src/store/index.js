import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = { counter: 0, showCounter: true }

const counterSlice = createSlice({
	name: 'counter',
	initialState,
	/**
	 * it seems that we can mutate the state directly using reduxtoolkit but in fact reduxtoolkit
	 * reduxtoolkit use a package called imugr which detect direct mutating to the state
	 * and clone the old state and return an updated state with your direct mutataion to the state
	 * */
	reducers: {
		increment(state) {
			state.counter++
		},
		decrement(state) {
			state.counter--
		},
		increase(state, action) {
			state.counter = state.counter + action.payload
		},
		toogleCounter(state) {
			state.showCounter = !state.showCounter
		},
	},
})

//state
const store = configureStore(
	{ reducer: counterSlice.reducer },
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), // <-- redux devtools
)

export const counterActions = counterSlice.actions //counterSlice.actions.increment returns {type:some unique identifer}

export default store

// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {

// }

// const index = createSlice({
// 	name: sliceName,
// 	initialState,
// 	reducers: {

// 	}
// });

// export const {

// } = index.actions
// export default index.reducer
