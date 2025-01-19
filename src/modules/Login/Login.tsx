import { FunctionComponent } from 'react'
import { Container } from '@/components/Container'
import { ContentStyled, BackgroundStyled } from './styled'
import { ILoginProps } from './Login.d'
import LoginForm from '@/components/Forms/LoginForm/LoginForm'
import RegisterForm from '@/components/Forms/LoginForm/RegisterForm'

export const LoginModule: FunctionComponent<ILoginProps> = ({
	type,
}): JSX.Element => {
	return (
		<Container>
			<ContentStyled>
				{type === 'register' && <RegisterForm />}
				<BackgroundStyled>
					<img src={`images/${type}-girl.png`} alt='' />
				</BackgroundStyled>
				{type === 'login' && <LoginForm />}
			</ContentStyled>
		</Container>
	)
}
