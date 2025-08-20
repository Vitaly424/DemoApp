import type { Metadata } from 'next'

import { Home } from '@/views/home/Home'

import { SEO_PROJECT } from '../config/seo'

export const metadata: Metadata = {
	title: SEO_PROJECT.home.name,
	description: SEO_PROJECT.home.description
}

export default function HomePage() {
	return <Home />
}
