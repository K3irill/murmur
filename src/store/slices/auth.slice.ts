import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '../services/authService'
import { AuthState, User } from './auth'
import Cookies from 'js-cookie'
export const register = createAsyncThunk(
	'auth/register',
	async (userData: { email: string; password: string }) => {
		const response = await authService.register(userData)
		return response
	}
)

export const login = createAsyncThunk(
	'auth/login',
	async (userData: { email: string; password: string }) => {
		const response = await authService.login(userData)

		return response
	}
)

export const getUserData = createAsyncThunk('auth/user', async () => {
	const response = await authService.getUser()
	return response
})

const initialState: AuthState = {
	user: Cookies.get('user')
		? JSON.parse(decodeURIComponent(Cookies.get('user') || '{}'))
		: null,
	token: Cookies.get('jwt') || null,
	status: 'idle',
	error: null,
}

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.status = 'loading'
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<any>) => {
				state.status = 'succeeded'
			})
			.addCase(register.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || null
			})
			.addCase(login.pending, state => {
				state.status = 'loading'
			})
			.addCase(
				login.fulfilled,
				(state, action: PayloadAction<{ jwt: string }>) => {
					state.status = 'succeeded'
					state.token = action.payload.jwt
				}
			)
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || null
			})
			.addCase(getUserData.pending, state => {
				state.status = 'loading'
			})
			.addCase(getUserData.fulfilled, (state, action: PayloadAction<User>) => {
				state.status = 'succeeded'
				state.user = action.payload
			})
			.addCase(getUserData.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message || null
			})
	},
})

export default authSlice.reducer
