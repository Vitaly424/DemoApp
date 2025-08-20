import type { CurrencyCategories, CurrencyItem } from './currencies.types'

export const currenciesData: CurrencyItem[] = [
	{
		value: 'rub',
		label: 'Рубли ₽',
		urlIcon: '/images/icons/currencies/rub.svg',
		category: 'fiat'
	},
	{
		value: 'usd',
		label: 'Доллары $',
		urlIcon: '/images/icons/currencies/usd.svg',
		category: 'fiat'
	},
	{
		value: 'eur',
		label: 'Евро €',
		urlIcon: '/images/icons/currencies/eur.svg',
		category: 'fiat'
	},
	{
		value: 'usdt',
		label: 'Tether USDT',
		urlIcon: '/images/icons/currencies/usdt.svg',
		category: 'crypto'
	}
]

export const currenciesCategories: CurrencyCategories[] = [
	{ value: 'crypto', label: 'Криптовалюты', urlIcon: '/images/icons/currencies/usdt.svg' },
	{ value: 'fiat', label: 'Фиат', urlIcon: '/images/icons/currencies/usd.svg' }
]
