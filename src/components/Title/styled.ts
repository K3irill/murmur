import styled, { css } from 'styled-components'
import { breakpoints } from '@/utils/constants/breakpoints'
import { COLORS } from '@/utils/constants'
import { ITitleProps, TSize } from './Title.d'

export const calculateSize = (size: TSize): string => {
	switch (size) {
		case '1':
			return `font-size: 56px;
              line-height: 120%;
              @media ${breakpoints.tabletMax} {
                font-size: 32px;
              }`
		case '2':
			return `font-size: 48px;
              line-height: 130%;
              @media ${breakpoints.tabletMax} {
                font-size: 32px;
                line-height: 120%;
              }`
		case '3':
			return `font-size: 40px;
              line-height: 130%;
              @media ${breakpoints.tabletMax} {
                font-size: 32px;
                line-height: 120%;
              }`
		case '4':
			return `font-size: 32px;
              line-height: 120%;
              @media ${breakpoints.tabletMax} {
                font-size: 24px;
              }`
		case '5':
			return `font-size: 24px;
              line-height: 120%;`
		case '6':
			return `font-size: 20px;
              line-height: 100%;`
		default:
			return ''
	}
}

type TitleStyledProps = Partial<ITitleProps>

export const TitleStyled = styled.div<TitleStyledProps>`
	font-weight: 700;
	${({ size }) => size && calculateSize(size)}

	${({ theme }) =>
		theme === 'black' &&
		css`
			color: ${COLORS.DarkColor};
		`}


  ${({ theme }) =>
		theme === 'gray' &&
		css`
			color: ${COLORS.GrayColor};
		`}

		${({ theme }) =>
		theme === 'purple' &&
		css`
			color: ${COLORS.PurpleColor};
		`}

		${({ theme }) =>
		theme === 'pink' &&
		css`
			color: ${COLORS.PinkColor};
		`}

    ${({ theme }) =>
		theme === 'white' &&
		css`
			color: ${COLORS.TextColorLight};
		`}
`
