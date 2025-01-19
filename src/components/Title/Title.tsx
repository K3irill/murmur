import React, { FunctionComponent } from 'react'
import { TitleStyled } from './styled'
import { ITitleProps } from './Title.d'

export const Title: FunctionComponent<ITitleProps> = ({
	size,
	type = 'p',
	children,
	hidden = false,
	theme = 'white',
}): JSX.Element => {
	return (
		<TitleStyled as={type} size={size} theme={theme} hidden={hidden}>
			{children}
		</TitleStyled>
	)
}
