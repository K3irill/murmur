import styled from 'styled-components'

export const FormStyled = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	height: 100%;
	margin: 40px 0;
`

export const FormWrapperStyled = styled.div`
	background: #d9d9d947;
	width: 457px;
	height: 600px;
	border-radius: 40px;
	padding: 36px;

	display: flex;
	flex-direction: column;
	align-items: center;
	& p {
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`
