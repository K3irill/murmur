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

const Register = () => {
	const router = useRouter()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			setLoading(true)
			const res = await fetch('http://localhost:8000/api/register', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password }),
			})
			if (res.status === 200) {
				router.push('/login')
			}
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<>
			<Head>
				<title>Greeting</title>
				<meta name='description' content='Greeting' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className={cn(styles.index)}>
				<header className={cn(styles.header)}>
					<div className={cn(styles.header__wrapper, 'wrapper')}>
						<div className={cn(styles.header__content)}>
							<Link className={cn(styles.header__logo)} href='/'>
								<Image
									src='/logo.svg'
									alt='MurMur logo'
									width={150}
									height={60}
								/>
							</Link>
							<nav className={cn(styles.header__navigation)}>
								<SignButton href='/register' text='Sign Up' type='up' />
								<SignButton href='/login' text='Sign In' type='in' />
							</nav>
						</div>
					</div>
				</header>
				<main>
					<div className={cn(styles.greeting)}>
						<div className={cn(styles.greeting__wrapper, 'wrapper')}>
							<div className={cn(styles.greeting__content)}>
								<FormStyled onSubmit={handleSubmit}>
									<legend>Sign Up</legend>
									<label>
										<p>Name</p>
										<input
											value={name}
											onChange={e => setName(e.target.value)}
											type='text'
										/>
									</label>
									<label>
										<p>Email</p>
										<input
											value={email}
											onChange={e => setEmail(e.target.value)}
											type='email'
										/>
									</label>
									<label>
										<p>Password</p>
										<input
											value={password}
											onChange={e => setPassword(e.target.value)}
											type='password'
										/>
									</label>
									{error && <p>{error}</p>}
									<button type='submit'>
										{loading ? 'loading...' : 'Register'}
									</button>
								</FormStyled>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export default Register
