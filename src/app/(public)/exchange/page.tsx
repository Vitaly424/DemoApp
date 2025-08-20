import type { Metadata } from 'next'

import { SEO_PROJECT } from '@/app/config/seo'

import { Exchange } from '@/views/exchange/Exchange'

export const metadata: Metadata = {
	title: SEO_PROJECT.exchange.name,
	description: SEO_PROJECT.exchange.description
}

export default function ExchangePage() {
	return <Exchange />
}
