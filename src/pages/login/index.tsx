import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import cn from 'classnames'
import SignButton from '@/components/ui/buttons/sign.button/SignButton'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/router'
const FormStyled = styled.form`
		display: flex;
		flex-direction: column;
		gap; 10px;
		border: 1px solid #000;
		input {
			padding: 10px;
			border: 1px solid #8619bd;
			outline: none;

		}
`
const Login = () => {
	const router = useRouter()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			setLoading(true)
			const res = await fetch('http://localhost:8000/api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({ email, password }),
			})
			if (res.status === 200) {
				router.push('/')
			}
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return <></>
}

export default Login
