import { COLORS } from '@/utils/constants'
import styled from 'styled-components'

export const StyledButton = styled.button<{ color: 'purple' | 'pink' }>`
	background-color: ${({ color }) =>
		color === 'purple' ? COLORS.PurpleColor : COLORS.PinkColor};

	border-radius: 10px;
	padding: 15px 0;
	width: 100%;
	cursor: pointer;
	transition: opacity 0.3s ease;

	&:hover {
		opacity: 0.7;
	}

	&:active {
		transform: scale(0.95);
	}
`
