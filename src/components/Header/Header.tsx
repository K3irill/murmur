import React, { FunctionComponent } from 'react'
import { ContentStyled, LogoStyled, NavStyled, HeaderStyled } from './styled'
import Image from 'next/image'
import { IHeaderProps } from './Header.d'
import { Container } from '../Container'
import SignButton from '../ui/buttons/sign.button/SignButton'

const Header: FunctionComponent<IHeaderProps> = ({ isAuth }): JSX.Element => {
	const onLogout = () => {}

	return (
		<HeaderStyled>
			<Container>
				<ContentStyled>
					<LogoStyled href='/'>
						<Image src='/logo.svg' alt='MurMur' width={150} height={60} />
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
