import styled from 'styled-components'

export const SvgStyled = styled.svg`
	position: absolute;
	z-index: -1;
`

export const RotatingCircle = styled.g`
	position: relative;
	animation: ${({ className }) =>
		className === 'clockwise'
			? 'rotate-clockwise 10s linear infinite'
			: 'rotate-counterclockwise 10s linear infinite'};

	@keyframes rotate-clockwise {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}

	@keyframes rotate-counterclockwise {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(-360deg);
		}
	}
`
