import type { Metadata } from 'next'

import { SEO_PROJECT } from '@/app/config/seo'

import { PaymentAgent } from '@/views/payment-agent/PaymentAgent'

export const metadata: Metadata = {
	title: SEO_PROJECT.paymentAgent.name,
	description: SEO_PROJECT.paymentAgent.description
}

export default function PaymentAgentPage() {
	return <PaymentAgent />
}
