import styled from 'styled-components'

export const HeaderStyled = styled.header`
	display: flex;
`
export const ContentStyled = styled.div`
	padding: 15px 20px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`
export const NavStyled = styled.nav`
	display: flex;
	gap: 10px;
`
export const LogoStyled = styled.a`
	transition: 0.4s;
	&:hover {
		transition: 0.4s;
		opacity: 0.7;
	}
`
