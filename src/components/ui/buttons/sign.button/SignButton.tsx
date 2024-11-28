import Link from 'next/link'
import React from 'react'
import cn from 'classnames'
import styles from './SignButton.module.scss'
interface SignButtonProps {
	href: string
	text: string
	type: 'up' | 'in'
}
const SignButton = ({ href, text, type }: SignButtonProps) => {
	return (
		<Link
			className={cn(styles.button, {
				[styles.button__up]: type === 'up',
				[styles.button__in]: type === 'in',
			})}
			href={href}
		>
			{text}
		</Link>
	)
}

export default SignButton
