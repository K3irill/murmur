import { FunctionComponent } from 'react'
import { Container } from '@/components/Container'

import { IGreetingProps } from './Greeting.d'
import {
	ContentStyled,
	GreetingStyled,
	SubtitleStyled,
	TitleStyled,
	WrapperStyled,
	TextStyled,
} from './styled'
import { SvgCircle } from '@/components/SvgCircle/SvgCircle'
import { Title } from '@/components/Title'
import { Button } from '@/components/ui/buttons/Button/Button'

export const GreetingModule: FunctionComponent<
	IGreetingProps
> = ({}): JSX.Element => {
	return (
		<Container>
			<GreetingStyled>
				<WrapperStyled>
					<SvgCircle />
					<ContentStyled>
						<SubtitleStyled>
							<Title size='5'>Welcome to</Title>
						</SubtitleStyled>
						<TitleStyled>Murrka</TitleStyled>
						<TextStyled>
							<Title size='6'>
								Murrka - уникальное приложение для голосовых звонков с
								возможностью уединения в групповых чатах. Общайся с друзьями и
								переключайся между режимами общения, чтобы слегка отойти, быть с
								кем-то наедине или слушать всех одновременно
							</Title>
						</TextStyled>

						<Button color='purple' directTo={'/register'}>
							<Title size='6'>Lets go</Title>
						</Button>
					</ContentStyled>
				</WrapperStyled>
			</GreetingStyled>
		</Container>
	)
}
