import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import cn from 'classnames'
import SignButton from '@/components/ui/buttons/sign.button/SignButton'
import Link from 'next/link'
//-----------------------------------------------------------------------------

export default function Home() {
	return (
		<>
			<Head>
				<title>Greeting</title>
				<meta name='description' content='Greeting' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<div className=''>
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
								<SignButton href='/login' text='Sign Up' type='up' />
								<SignButton href='/login' text='Sign In' type='in' />
							</nav>
						</div>
					</div>
				</header>
				<main></main>
			</div>
		</>
	)
}
