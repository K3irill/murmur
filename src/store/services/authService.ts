// services/api.js
import axios from 'axios'

const API_URL = 'http://localhost:8000/api'

const api = axios.create({
	baseURL: API_URL,
})

export const authService = {
	async register(data: any) {
		const response = await api.post('/register/', data)
		return response.data
	},

	async login(data: any) {
		const response = await api.post('/login/', data)
		return response.data
	},
}
