import { UrlBuilder } from '../base.config'

class PublicUrl extends UrlBuilder {
	constructor() {
		super()
	}

	home(): string {
		return this.root('/')
	}

	location(): string {
		return this.root('/location')
	}

	paymentAgent(): string {
		return this.root('/payment-agent')
	}

	swiftsepa(): string {
		return this.root('/swiftsepa')
	}

	cash(): string {
		return this.root('/cash')
	}

	exchange(): string {
		return this.root('/exchange')
	}

	privacyPolicy(): string {
		return this.root('/privacy-policy')
	}

	kysAmlPolicy(): string {
		return this.root('/kys-aml')
	}
}

export const publicUrl = new PublicUrl()
