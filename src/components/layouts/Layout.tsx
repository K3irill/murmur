import { ILayoutProps } from './Layout.d'
import Head from 'next/head'
import React, { FunctionComponent, PropsWithChildren } from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux'

const Layout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => {
	// const {isAuth} = useSelector((state: RootState) => state.auth)

	return (
		<>
			<Header isAuth={false} />
			<main>{children}</main>
		</>
	)
}

export default Layout
