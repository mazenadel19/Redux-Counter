import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css'

const Counter = () => {
	const dispatch = useDispatch()

	const counter = useSelector(state => state.counter) // extract a slice of data from redux state (store)
	// useSelector sets a subscibtion for this component in the store, the variable (counter) will recieve the latest value automatically if the value of the variable in the store/state changes!
	const showCounter = useSelector(state => state.showCounter)

	const incrementHandler = () => dispatch({ type: 'increment' })

	const increaseHandler = () => dispatch({ type: 'increase', amount: 5 })

	const decrementHandler = () => dispatch({ type: 'decrement' })

	const toggleCounterHandler = () => dispatch({ type: 'toggle' })

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
