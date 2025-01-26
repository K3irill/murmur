import { ILayoutProps } from './Layout.d'
import Head from 'next/head'
import React, { FunctionComponent, PropsWithChildren, useEffect } from 'react'
import Header from '../Header/Header'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
const Layout: FunctionComponent<ILayoutProps> = ({ children }): JSX.Element => {
	const { user } = useSelector((state: RootState) => state.auth)

	return (
		<>
			<Header isAuth={!!user} />
			<main>{children}</main>
		</>
	)
}

export default Layout
