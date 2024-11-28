import { store } from '@/store/store'
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import localFont from 'next/font/local'
export const localMohave = localFont({
	src: [
		{ path: './fonts/Mohave-Bold.woff', weight: '700', style: 'normal' },
		{ path: './fonts/Mohave-Medium.woff', weight: '400', style: 'normal' },
	],
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<div className={localMohave.className}>
				<Component {...pageProps} />
			</div>
		</Provider>
	)
}
