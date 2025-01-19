import React from 'react'
import { FormStyled, FormWrapperStyled } from './styled'
import { Title } from '@/components/Title'
import styled from 'styled-components'
import { InputElement } from '@/components/ui/inputs/Input/Input'
import { COLORS } from '@/utils/constants'
import { Button } from '@/components/ui/buttons/Button/Button'

const LoginForm = () => {
	return (
		<FormWrapperStyled>
			<Title size='5'>
				Sign <span style={{ color: COLORS.PurpleColor }}>IN</span>
			</Title>
			<FormStyled>
				<InputElement label={'Email'} inputType={'email'} />
				<InputElement label={'Password'} inputType={'password'} />
				<Button color='purple' directTo={'/register'}>
					<Title type={'span'} size='6'>
						login
					</Title>
				</Button>
			</FormStyled>
		</FormWrapperStyled>
	)
}

export default LoginForm
