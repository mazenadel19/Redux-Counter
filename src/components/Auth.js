import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './Auth.module.css'
import { authActions } from '../store/auth-slice'

const Auth = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(state => state.auth.isAuth)

	const emailRef = useRef()
	const passwordRef = useRef()

	const submitHandler = e => {
		e.preventDefault()
		const email = emailRef.current.value
		const password = passwordRef.current.value
		if (email.trim().length > 0 && password.trim().length > 0)
			dispatch(authActions.login())
	}

	return (
		<main className={classes.auth}>
			<section>
				{!isAuth && (
					<form onSubmit={submitHandler}>
						<div className={classes.control}>
							<label htmlFor='email'>Email</label>
							<input type='email' id='email' ref={emailRef} />
						</div>
						<div className={classes.control}>
							<label htmlFor='password'>Password</label>
							<input type='password' id='password' ref={passwordRef} />
						</div>
						<button>Login</button>
					</form>
				)}
			</section>
		</main>
	)
}

export default Auth
