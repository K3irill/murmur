import styled from 'styled-components'
import { breakpoints } from '@/utils/constants'

export const ContainerRoot = styled.div`
	max-width: 1248px;
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	margin: 0 auto;

	@media ${breakpoints.mobileMax} {
		padding-left: 16px;
		padding-right: 16px;
	}
`
