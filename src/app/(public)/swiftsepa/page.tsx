import type { Metadata } from 'next'

import { SEO_PROJECT } from '@/app/config/seo'

import { SwiftSepa } from '@/views/swiftsepa/SwiftSepa'

export const metadata: Metadata = {
	title: SEO_PROJECT.swiftsepa.name,
	description: SEO_PROJECT.swiftsepa.description
}

export default function SwiftSepaPage() {
	return <SwiftSepa />
}
