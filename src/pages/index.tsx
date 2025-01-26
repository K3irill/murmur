import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'
//-----------------------------------------------------------------------------

export default function Home() {
	const { user } = useSelector((state: RootState) => state.auth)
	if (!user) return 'no data'
	return (
		<>
			<div>
				<h1>{user.name}</h1>
			</div>
		</>
	)
}
