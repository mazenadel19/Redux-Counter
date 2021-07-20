import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = { value: 0, showCounter: true }

const counterSlice = createSlice({
	name: 'counter',
	initialState: initialCounterState,
	/**
	 * it seems that we can mutate the state directly using reduxtoolkit but in fact reduxtoolkit
	 * reduxtoolkit use a package called imugr which detect direct mutating to the state
	 * and clone the old state and return an updated state with your direct mutataion to the state
	 * */
	reducers: {
		increment(state) {
			state.value++
		},
		decrement(state) {
			state.value--
		},
		increase(state, action) {
			state.value = state.value + action.payload
		},
		toogleCounter(state) {
			state.showCounter = !state.showCounter
		},
	},
})

export const counterActions = counterSlice.actions //counterSlice.actions.increment is called an action creator, it's a method created by reduxtoolkit which returns action object when it's called {type:SOME_UNIQUE-IDENTIFIER}


export default counterSlice.reducer
