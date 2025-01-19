import { store } from '@/store/store'
import '@/assets/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux'
import Head from 'next/head'
import Layout from '@/components/layouts/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import useRedirect from '@/hooks/useRedirect'

import Background from '@/utils/constants/background'
import useBackground from '@/hooks/useBackgroundSwitcher'
import BackgroundSwitcher from '@/utils/constants/background'

export default function App({ Component, pageProps }: AppProps) {
	useRedirect()
	const background = useBackground()
	return (
		<Provider store={store}>
			<Head>
				<title>Murka</title>

				<meta name='viewport' content='width=device-width, user-scalable=no' />
				<link rel='icon' href='/images/favicon/favicon.png' />
			</Head>
			<BackgroundSwitcher background={background} />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	)
}
