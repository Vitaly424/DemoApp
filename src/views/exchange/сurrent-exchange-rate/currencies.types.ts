export type SelectedSide = 'from' | 'to'
export type CurrencyValues = 'usd' | 'eur' | 'rub' | 'usdt'
export type CurrencyCategoriesValues = 'crypto' | 'fiat' | null

export interface CurrencyItem {
	value: CurrencyValues
	label: string
	urlIcon: string
	category: CurrencyCategoriesValues
}

export interface CurrencyCategories {
	value: CurrencyCategoriesValues
	label: string
	urlIcon: string
}
