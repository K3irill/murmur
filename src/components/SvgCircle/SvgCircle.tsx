import { SvgStyled, RotatingCircle } from './styled'

export function SvgCircle() {
	return (
		<SvgStyled
			width='746'
			height='746'
			viewBox='0 0 746 746'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<RotatingCircle className='clockwise'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M373 746C579.002 746 746 579.002 746 373C746 166.998 579.002 0 373 0C166.998 0 0 166.998 0 373C0 579.002 166.998 746 373 746ZM373 742.67C577.163 742.67 742.67 577.163 742.67 373C742.67 168.837 577.163 3.33036 373 3.33036C168.837 3.33036 3.33036 168.837 3.33036 373C3.33036 577.163 168.837 742.67 373 742.67Z'
					fill='#D9D9D9'
					fillOpacity='0.22'
				/>
			</RotatingCircle>
			<RotatingCircle className='counterclockwise'>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M373 714C561.329 714 714 561.329 714 373C714 184.671 561.329 32 373 32C184.671 32 32 184.671 32 373C32 561.329 184.671 714 373 714ZM373 710.955C559.648 710.955 710.955 559.648 710.955 373C710.955 186.352 559.648 35.0446 373 35.0446C186.352 35.0446 35.0447 186.352 35.0447 373C35.0447 559.648 186.352 710.955 373 710.955Z'
					fill='#D9D9D9'
					fillOpacity='0.22'
				/>
			</RotatingCircle>
		</SvgStyled>
	)
}
