type PaymentOptionClass =
	| 'products'
	| 'services'
	| 'marketing'
	| 'decorating'
	| 'it'
	| 'cosmetic'
	| 'study'
	| 'realty'
	| 'agricultural_products'

export interface PaymentOptionItem {
	class: PaymentOptionClass
	title: string
	image: {
		url: string
		alt: string
		width: number
		height: number
	}
}
