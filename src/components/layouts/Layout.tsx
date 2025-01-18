import Head from 'next/head'
import React, { FunctionComponent, PropsWithChildren } from 'react'

const Layout: FunctionComponent = ({
	children,
}: PropsWithChildren): JSX.Element => {
	return (
		<>
			<Head>
				<title>Murka</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<main>{children}</main>
		</>
	)
}

export default Layout
