import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/_next/:path*',
				destination: '/.next/:path*',
			},
		]
	},
}

export default nextConfig
