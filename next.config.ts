import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	sassOptions: {
		additionalData: `
			$breakpoint-xs: 389px;
			$breakpoint-sm: 479px;
			$breakpoint-md: 767px;
			$breakpoint-lg: 991px;
			$breakpoint-2lg: 1023px;
			$breakpoint-xl: 1220px;
		`
	}
}

export default nextConfig
