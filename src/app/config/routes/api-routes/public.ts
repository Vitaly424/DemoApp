import { UrlBuilder } from '../base.config'

class PublicApiUrl extends UrlBuilder {
	constructor() {
		super()
	}

	// steam
	get(): string {
		return this.root('/steam/check_promo')
	}
}

export const publicApiUrl = new PublicApiUrl()
