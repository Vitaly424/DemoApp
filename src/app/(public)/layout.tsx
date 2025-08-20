import type { ReactNode } from 'react'

import { Footer } from '@/components/layout/footer/Footer'
import { Header } from '@/components/layout/header/Header'

interface PublicLayoutProps {
	children: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	)
}
