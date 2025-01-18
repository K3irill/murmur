import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'

const useRedirect = () => {
	const router = useRouter()

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
