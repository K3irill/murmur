import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone()

	// Если запрос содержит "_next", замените его на ".next"
	if (url.pathname.startsWith('/_next')) {
		url.pathname = url.pathname.replace('/_next', '/.next')
		return NextResponse.rewrite(url)
	}

	return NextResponse.next()
}
