import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import cn from 'classnames'
import SignButton from '@/components/ui/buttons/sign.button/SignButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/components/layouts/Layout'
import { GreetingModule } from '@/modules/Greeting'

//-----------------------------------------------------------------------------

export default function Greeting() {
	// const router = useRouter()
	// const [user, setUser] = useState(null)
	// const [isAuth, setAuth] = useState(false)
	// useEffect(() => {
	// 	;(async () => {
	// 		try {
	// 			const res = await fetch('http://localhost:8000/api/user', {
	// 				credentials: 'include',
	// 			})
	// 			const data = await res.json()
	// 			if (res.status === 200) {
	// 				setAuth(true)
	// 				setUser(data)
	// 			}
	// 			console.log(data)
	// 		} catch (error: any) {
	// 			console.log(error.message)
	// 			setAuth(false)
	// 		}
	// 	})()
	// }, [])

	// const onLogout = async () => {
	// 	try {
	// 		const res = await fetch('http://localhost:8000/api/logout', {
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			credentials: 'include',
	// 		})
	// 		if (res.status === 200) {
	// 			setAuth(false)
	// 			router.push('/login')
	// 		}
	// 	} catch (error: any) {
	// 		console.log(error.message)
	// 	}
	// }

	return (
		<>
			<GreetingModule />
		</>
	)
}
