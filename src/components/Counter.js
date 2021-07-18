import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Counter.module.css'

class Counter extends Component {
	incrementHandler = () => this.props.increment()

	decrementHandler = () => this.props.decrement()

	toggleCounterHandler = () => {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.incrementHandler}>Increment</button>
					<button onClick={this.decrementHandler}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		)
	}
}

const mapStateToProps = state => {
	return {
		counter: state.counter,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		increment: () => dispatch({ type: 'increment' }),
		decrement: () => dispatch({ type: 'decrement' }),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

// connect(mapStateToProps,mapDispatchToProps)(Counter)

// this funcky syntax is called higher order component, we cxecute the connect fntion
// it returns a new function which then takes counter as an argument
