import React, { useState } from 'react'
import { FormStyled, FormWrapperStyled } from './styled'
import { Title } from '@/components/Title'
import styled from 'styled-components'
import { InputElement } from '@/components/ui/inputs/Input/Input'
import { COLORS } from '@/utils/constants'
import { Button } from '@/components/ui/buttons/Button/Button'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { schema } from './login.schema'
import { z } from 'zod'
import { getUserData, login } from '@/store/slices/auth.slice'
import Cookies from 'js-cookie'
type FormData = z.infer<typeof schema>

const LoginForm = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useDispatch()
	const router = useRouter()

	const {
		register: loginRegister,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: zodResolver(schema) })

	const onSubmit = async (data: FormData) => {
		try {
			setLoading(true)

			const response = await dispatch(login(data)).unwrap()

			if (response?.jwt) {
				const userResponse = await dispatch(getUserData()).unwrap()
				console.log(userResponse)
				Cookies.set('user', JSON.stringify(userResponse), { expires: 7 })
				router.push('/')
			}
		} catch (error) {
			console.error('Login failed:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<FormWrapperStyled>
			<Title size='5'>
				Sign <span style={{ color: COLORS.PurpleColor }}>IN</span>
			</Title>
			<FormStyled onSubmit={handleSubmit(onSubmit)}>
				<InputElement
					label='Email'
					inputType='email'
					{...loginRegister('email')}
					error={errors.email?.message}
				/>
				<InputElement
					label='Password'
					inputType='password'
					{...loginRegister('password')}
					error={errors.password?.message}
				/>
				<Button type='submit' color='purple'>
					<Title type='span' size='6'>
						{loading ? 'loading... ' : 'Login'}
					</Title>
				</Button>
			</FormStyled>
		</FormWrapperStyled>
	)
}

export default LoginForm
