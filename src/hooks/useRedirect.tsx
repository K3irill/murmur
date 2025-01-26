import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import Cookies from 'js-cookie'
const useRedirect = () => {
	const router = useRouter()
	if (
		router.pathname === '/greeting' &&
		router.pathname === '/login' &&
		router.pathname === '/register'
	)
		return
	useEffect(() => {
		if (Cookies.get('user') === 'undefined') {
			router.push('/greeting')
		}
	}, [router.pathname])
}

export default useRedirect
