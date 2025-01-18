import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { authService } from '../services/authService'
import { AuthState, User } from './auth'

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

const authSlice = createSlice({
	name: 'auth',
	initialState: {
		user: null,
		token: null,
		status: 'idle',
		error: null,
	} as AuthState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.status = 'loading'
			})
			.addCase(
				register.fulfilled,
				(
					state,
					action: PayloadAction<{ user: User; token: string | null }>
				) => {
					state.status = 'succeeded'
					state.user = action.payload.user
					state.token = action.payload.token || null
				}
			)
			.addCase(register.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
			.addCase(login.pending, state => {
				state.status = 'loading'
			})
			.addCase(
				login.fulfilled,
				(
					state,
					action: PayloadAction<{ user: User; token: string | null }>
				) => {
					state.status = 'succeeded'
					state.user = action.payload.user
					state.token = action.payload.token || null
				}
			)
			.addCase(login.rejected, (state, action) => {
				state.status = 'failed'
				state.error = action.error.message
			})
	},
})

export default authSlice.reducer
