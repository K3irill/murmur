import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import cn from 'classnames'
import SignButton from '@/components/ui/buttons/sign.button/SignButton'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// import { Monoton } from 'next/font/google'
//-----------------------------------------------------------------------------
// const monoton = Monoton({ weight: '400', subsets: ['latin'] })

export default function Home() {
	const router = useRouter()
	const [user, setUser] = useState(null)
	const [isAuth, setAuth] = useState(false)
	useEffect(() => {
		;(async () => {
			try {
				const res = await fetch('http://localhost:8000/api/user', {
					credentials: 'include',
				})
				const data = await res.json()
				if (res.status === 200) {
					setAuth(true)
					setUser(data)
				}
				console.log(data)
			} catch (error: any) {
				console.log(error.message)
				setAuth(false)
			}
		})()
	}, [])

	const onLogout = async () => {
		try {
			const res = await fetch('http://localhost:8000/api/logout', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				credentials: 'include',
			})
			if (res.status === 200) {
				setAuth(false)
				router.push('/login')
			}
		} catch (error: any) {
			console.log(error.message)
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
								{!isAuth ? (
									<>
										<SignButton href='/register' text='Sign Up' type='up' />
										<SignButton href='/login' text='Sign In' type='in' />
									</>
								) : (
									<button onClick={onLogout}>Logout</button>
								)}
							</nav>
						</div>
					</div>
				</header>
				<main>
					<div className={cn(styles.greeting)}>
						<div className={cn(styles.greeting__wrapper, 'wrapper')}>
							<SvgCircle />
							<div className={cn(styles.greeting__content)}>
								<h2 className={cn(styles.greeting__subtitle)}>Welcome to</h2>
								<h1 className={cn(styles.greeting__title)}>MurMur</h1>
								<h3 className={cn(styles.greeting__text)}>
									MurMur - уникальное приложение для голосовых звонков с
									возможностью уединения в групповых чатах. Общайся с друзьями и
									переключайся между режимами общения, чтобы слегка отойти, быть
									с кем-то наедине или слушать всех одновременно
								</h3>
								{isAuth && user ? (
									<h2 className={cn(styles.greeting__subtitle)}>
										Hi {user.name}
									</h2>
								) : (
									<button className={cn(styles.greeting__button)}>
										Зарегестрироваться
									</button>
								)}
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	)
}

export function SvgCircle() {
	return (
		<svg
			className={cn(styles['svg-circle'])}
			width='746'
			height='746'
			viewBox='0 0 746 746'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M373 746C579.002 746 746 579.002 746 373C746 166.998 579.002 0 373 0C166.998 0 0 166.998 0 373C0 579.002 166.998 746 373 746ZM373 742.67C577.163 742.67 742.67 577.163 742.67 373C742.67 168.837 577.163 3.33036 373 3.33036C168.837 3.33036 3.33036 168.837 3.33036 373C3.33036 577.163 168.837 742.67 373 742.67Z'
				fill='#D9D9D9'
				fill-opacity='0.22'
			/>
			<path
				fill-rule='evenodd'
				clip-rule='evenodd'
				d='M373 714C561.329 714 714 561.329 714 373C714 184.671 561.329 32 373 32C184.671 32 32 184.671 32 373C32 561.329 184.671 714 373 714ZM373 710.955C559.648 710.955 710.955 559.648 710.955 373C710.955 186.352 559.648 35.0446 373 35.0446C186.352 35.0446 35.0447 186.352 35.0447 373C35.0447 559.648 186.352 710.955 373 710.955Z'
				fill='#D9D9D9'
				fill-opacity='0.22'
			/>
		</svg>
	)
}
