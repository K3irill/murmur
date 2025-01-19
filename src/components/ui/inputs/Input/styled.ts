import styled, { css } from 'styled-components'
import { IInputProps } from './Input.d'

type InputStyledProps = Partial<IInputProps>

export const InputContentStyled = styled.div<InputStyledProps>`
	width: 100%;
	display: flex;
	flex-direction: column;
`

export const InputStyled = styled.input`
	width: 100%;
	border-radius: 10px;
	padding: 12px 18px;
	margin-top: 10px;
`

export const ErrorStyled = styled.p`
	color: red;
	font-size: 12px;
	margin-top: 5px;
`
