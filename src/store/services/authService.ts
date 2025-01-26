import axios from 'axios'
import Cookies from 'js-cookie'

const API_URL = 'http://localhost:8000/api'

const api = axios.create({
	baseURL: API_URL,
	withCredentials: true,
})

export const authService = {
	async register(data: any) {
		const response = await api.post('/register', data)
		return response.data
	},

	async login(data: any) {
		const response = await api.post('/login', data)
		return response.data
	},

	async logout() {
		await api.post('/logout')

		Cookies.remove('user')
		Cookies.remove('jwt')
	},

	async getUser() {
		const jwt = Cookies.get('jwt')
		if (!jwt) {
			throw new Error('JWT token not found')
		}

		const response = await api.get('/user', {
			headers: {
				Authorization: `Bearer ${jwt}`,
			},
		})
		return response.data
	},
}
