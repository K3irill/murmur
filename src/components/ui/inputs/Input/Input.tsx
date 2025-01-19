import React, { FunctionComponent, forwardRef } from 'react'
import { InputContentStyled, InputStyled, ErrorStyled } from './styled'
import { IInputProps } from './Input.d'

export const InputElement = forwardRef<
	HTMLInputElement,
	IInputProps & { error?: string }
>(({ label, inputType, error, ...rest }, ref) => {
	return (
		<InputContentStyled>
			<label>
				<p>{label}</p>

				<InputStyled type={inputType} ref={ref} {...rest} />
			</label>
			{error && <ErrorStyled>{error}</ErrorStyled>}
		</InputContentStyled>
	)
})

InputElement.displayName = 'InputElement'
