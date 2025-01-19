import React from 'react'
import { StyledButton } from './styled'
import { ButtonProps } from './Button.d'
import Link from 'next/link'

export const Button: React.FC<ButtonProps> = ({
	children,
	color,
	onClick,
	directTo,
	type = 'button',
}) => {
	return (
		<StyledButton type={type} color={color} onClick={onClick}>
			{directTo ? <Link href={directTo}>{children}</Link> : children}
		</StyledButton>
	)
}
