import type { Metadata } from 'next'

import { SEO_PROJECT } from '@/app/config/seo'

import { Cash } from '@/views/cash/Cash'

export const metadata: Metadata = {
	title: SEO_PROJECT.cash.name,
	description: SEO_PROJECT.cash.description
}

export default function CashPage() {
	return <Cash />
}
