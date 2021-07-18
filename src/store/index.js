import {createStore} from 'redux'
//reducer
const counterReducer = (state = { counter: 0 }, action) => {
	if (action.type === 'increment') return {counter: state.counter+1}

    if (action.type === 'decrement') return {counter: state.counter-1}

    return state
}
//state
const store = createStore(counterReducer)

export default store

