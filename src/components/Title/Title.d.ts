import { ReactNode } from 'react'

export type TTag =
	| 'h1'
	| 'h2'
	| 'h3'
	| 'h4'
	| 'h5'
	| 'h6'
	| 'div'
	| 'p'
	| 'span'
export type TSize = '1' | '2' | '3' | '4' | '5' | '6'
export type TTheme = 'purple' | 'black' | 'white' | 'pink' | 'gray'

export interface ITitleProps {
	size: TSize
	type?: TTag
	children?: ReactNode
	theme?: TTheme
	hidden?: boolean
}
