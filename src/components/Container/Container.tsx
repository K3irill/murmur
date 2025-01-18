import React, { FunctionComponent } from 'react'
import { IContainerProps } from './Container.d'
import { ContainerRoot } from './styled'

export const Container: FunctionComponent<IContainerProps> = ({
	children,
}): JSX.Element => <ContainerRoot>{children}</ContainerRoot>
