import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Providers } from './config/providers/Providers'
import { SEO_PROJECT } from './config/seo'

import './globals.scss'
import './normailze.scss'

const sfUiDisplay = localFont({
	src: [
		{
			path: './fonts/sf-ui-display-medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: './fonts/sf-ui-display-semibold.woff2',
			weight: '600',
			style: 'normal'
		},
		{
			path: './fonts/sf-ui-display-regular.woff2',
			weight: '400',
			style: 'normal'
		}
	]
})

export const metadata: Metadata = {
	title: {
		absolute: `${SEO_PROJECT.globalName}`,
		template: `%s | ${SEO_PROJECT.globalName}`
	},
	description: SEO_PROJECT.globalDescription,
	icons: {
		icon: [
			{ url: '/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon/favicon.svg', type: 'image/svg+xml' }
		],
		shortcut: '/favicon/favicon.ico',
		apple: '/favicon/apple-touch-icon.png'
	},
	manifest: '/favicon/site.webmanifest'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body className={`${sfUiDisplay.className}`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
