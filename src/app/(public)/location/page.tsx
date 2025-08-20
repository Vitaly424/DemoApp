import type { Metadata } from 'next'

import { SEO_PROJECT } from '@/app/config/seo'

import { Location } from '@/views/location/Location'

export const metadata: Metadata = {
	title: SEO_PROJECT.location.name,
	description: SEO_PROJECT.location.description
}

export default function LocationPage() {
	return <Location />
}
