import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'
import { counterActions } from '../store/counter-slice';

const Counter = () => {
	const dispatch = useDispatch()

	const counter = useSelector(state => state.counter.value) // extract a slice of data from redux state (store)
	// useSelector sets a subscibtion for this component in the store, the variable (counter) will recieve the latest value automatically if the value of the variable in the store/state changes!

	const showCounter = useSelector(state => state.counter.showCounter)

	const incrementHandler = () => dispatch(counterActions.increment())

	const increaseHandler = () => dispatch(counterActions.increase(5)) // { type:SOME_UNIQUE_IDENTIFIER, payload:10 }

	const decrementHandler = () => dispatch(counterActions.decrement())

	const toggleCounterHandler = () => dispatch(counterActions.toogleCounter())

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>

			{showCounter && (
				<>
					<div className={classes.value}>{counter}</div>
					<div>
						<button onClick={incrementHandler}>Increment</button>
						<button onClick={increaseHandler}>Increase by 5</button>
						<button onClick={decrementHandler}>Decrement</button>
					</div>
				</>
			)}
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	)
}

export default Counter
