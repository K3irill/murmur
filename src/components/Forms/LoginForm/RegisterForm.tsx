import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useDispatch } from 'react-redux'
import { FormStyled, FormWrapperStyled } from '../LoginForm/styled'
import { Title } from '@/components/Title'
import { InputElement } from '@/components/ui/inputs/Input/Input'
import { COLORS } from '@/utils/constants'
import { Button } from '@/components/ui/buttons/Button/Button'
import { register } from '@/store/slices/auth.slice'
import { useRouter } from 'next/router'
import { schema } from './register.schema'

type FormData = z.infer<typeof schema>

const RegisterForm = () => {
	const [loading, setLoading] = useState<boolean>(false)
	const dispatch = useDispatch()
	const router = useRouter()
	const {
		register: formRegister,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: zodResolver(schema),
	})

	const onSubmit = async (data: FormData) => {
		try {
			setLoading(true)
			const response = await dispatch(register(data))
			if (response.payload) {
				console.log('User registered:', response.payload?.user)
				router.push('/')
			}
		} catch (error) {
			console.error('Registration failed:', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<FormWrapperStyled>
			<Title size='5'>
				Sign <span style={{ color: COLORS.PinkColor }}>UP</span>
			</Title>
			<FormStyled onSubmit={handleSubmit(onSubmit)}>
				<InputElement
					label='Name'
					inputType='text'
					{...formRegister('name')}
					error={errors.name?.message}
				/>
				<InputElement
					label='Email'
					inputType='email'
					{...formRegister('email')}
					error={errors.email?.message}
				/>
				<InputElement
					label='Password'
					inputType='password'
					{...formRegister('password')}
					error={errors.password?.message}
				/>
				<Button type='submit' color='pink'>
					<Title type='span' size='6'>
						{loading ? 'loading... ' : 'Register'}
					</Title>
				</Button>
			</FormStyled>
		</FormWrapperStyled>
	)
}

export default RegisterForm
