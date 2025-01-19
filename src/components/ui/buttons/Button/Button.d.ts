export interface ButtonProps {
	children: React.ReactNode
	color: 'purple' | 'pink'
	onClick?: () => void
	directTo?: string
	type?: 'submit' | 'button' | 'reset'
}
