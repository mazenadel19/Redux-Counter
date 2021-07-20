import { createSlice } from '@reduxjs/toolkit'

const intialAuthState = { isAuth: false }

const authSlice = createSlice({
	name: 'authentication',
	initialState: intialAuthState,
	reducers: {
		login(state) {
			state.isAuth = true
		},
		logout(state) {
			state.isAuth = false
		},
	},
})

export const authActions = authSlice.actions

export default authSlice.reducer
