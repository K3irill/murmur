import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

const useRedirect = () => {
	const router = useRouter()
	if (
		router.pathname === '/greeting' &&
		router.pathname === '/login' &&
		router.pathname === '/register'
	)
		return
	useEffect(() => {
		const fetchAuth = async () => {
			const response = await fetch('/api/auth', {
				credentials: 'include',
			})

			if (!response.ok) {
				router.push('/greeting')
			}
		}

		fetchAuth()
	}, [])
}

export default useRedirect
