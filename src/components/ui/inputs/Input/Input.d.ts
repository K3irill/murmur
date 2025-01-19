import { ReactNode } from 'react'

export interface IInputProps {
	children?: ReactNode
	label?: string
	inputType?: string
	hidden?: boolean
	onClick?: () => void
	error?: string
}
