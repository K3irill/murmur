import React, { FunctionComponent } from 'react'
import { ContentStyled, LogoStyled, NavStyled, HeaderStyled } from './styled'
import Image from 'next/image'
import { IHeaderProps } from './Header.d'
import { Container } from '../Container'
import SignButton from '../ui/buttons/sign.button/SignButton'
import { Title } from '../Title'

const Header: FunctionComponent<IHeaderProps> = ({ isAuth }): JSX.Element => {
	const onLogout = () => {}

	return (
		<HeaderStyled>
			<Container>
				<ContentStyled>
					<LogoStyled href='/'>
						{/* <Image src='/logo.svg' alt='Murrka' width={150} height={60} /> */}
						<Title size='6'>Murrka</Title>
					</LogoStyled>
					<NavStyled>
						{!isAuth ? (
							<>
								<SignButton href='/register' text='Sign Up' type='up' />
								<SignButton href='/login' text='Sign In' type='in' />
							</>
						) : (
							<button onClick={onLogout}>Logout</button>
						)}
					</NavStyled>
				</ContentStyled>
			</Container>
		</HeaderStyled>
	)
}

export default Header
