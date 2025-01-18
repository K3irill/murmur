import { FunctionComponent } from 'react'
import { Container } from '@/components/Container'

import { IGreetingProps } from './Greeting.d'
import {
	ContentStyled,
	GreetingStyled,
	SubtitleStyled,
	TitleStyled,
	WrapperStyled,
} from './styled'
import { SvgCircle } from '@/components/SvgCircle/SvgCircle'

export const GreetingModule: FunctionComponent<
	IGreetingProps
> = ({}): JSX.Element => {
	return (
		<Container>
			<GreetingStyled>
				<WrapperStyled>
					<SvgCircle />
					<ContentStyled>
						<SubtitleStyled>Welcome to</SubtitleStyled>
						<TitleStyled>MurMur</TitleStyled>
						<SubtitleStyled>
							MurMur - уникальное приложение для голосовых звонков с
							возможностью уединения в групповых чатах. Общайся с друзьями и
							переключайся между режимами общения, чтобы слегка отойти, быть с
							кем-то наедине или слушать всех одновременно
						</SubtitleStyled>

						<button>Зарегестрироваться</button>
					</ContentStyled>
				</WrapperStyled>
			</GreetingStyled>
		</Container>
	)
}
