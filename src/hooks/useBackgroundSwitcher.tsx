import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const useBackground = () => {
	const router = useRouter()
	const [background, setBackground] = useState('')

	useEffect(() => {
		switch (router.pathname) {
			case '/register':
				setBackground(
					'linear-gradient(180deg, rgba(202, 8, 131, 0.83) -16.76%, #100A1B 116.52%)'
				)
				break
			case '/greeting':
				setBackground(
					'linear-gradient(180deg, #9014E1 -16.76%, #100A1B 116.52%);'
				)
				break
			default:
				setBackground('#212121')
		}
	}, [router.pathname])

	return background
}

export default useBackground
