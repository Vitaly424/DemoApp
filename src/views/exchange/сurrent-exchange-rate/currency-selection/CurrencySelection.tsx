import cn from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

import { Badge } from '@/components/ui/badge/Badge'

import { currenciesCategories, currenciesData } from '../currencies.data'
import type { CurrencyCategoriesValues, CurrencyItem } from '../currencies.types'

import styles from './CurrencySelection.module.scss'

interface CurrencySelectionProps {
	onBackConverter: () => void
	onSelectCurrency: (currency: CurrencyItem) => void
}

export function CurrencySelection(props: CurrencySelectionProps) {
	const { onBackConverter, onSelectCurrency } = props
	const [searchValue, setSearchValue] = useState('')
	const [selectedCategory, setSelectedCategory] = useState<CurrencyCategoriesValues>(null)

	const filteredCurrencies = currenciesData
		.filter(currency =>
			(currency.label + currency.value).toLowerCase().includes(searchValue.toLowerCase())
		)
		.filter(currency => !selectedCategory || currency.category === selectedCategory)

	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<div className={styles.heading}>
					<button
						className={styles.to_back_converter}
						type='button'
						onClick={onBackConverter}
					>
						<Image
							src='/images/icons/arrow-gray.svg'
							alt=''
							width={10}
							height={10}
						/>
					</button>

					<div className={styles.logo}>
						<Image
							src='/images/logo-gray.svg'
							alt=''
							width={260}
							height={50}
						/>
					</div>
				</div>

				<div>
					<h3 className={styles.category_name}>Категории</h3>

					<div className={styles.category_list}>
						{currenciesCategories.map(category => (
							<button
								key={category.value}
								className={cn(styles.category_card, {
									[styles.category_card_active]: selectedCategory === category.value
								})}
								onClick={() =>
									setSelectedCategory(prev => (prev === category.value ? null : category.value))
								}
								type='button'
							>
								<div className={styles.category_card_content}>
									<div className={styles.category_card_image}>
										<img
											src={category.urlIcon}
											alt='currency'
										/>
									</div>

									<div className={styles.category_card_name}>
										<p>{category.label}</p>
									</div>
								</div>
							</button>
						))}
					</div>
				</div>
			</div>

			<div className={styles.box_list_currency}>
				<h3 className={styles.title}>Список актуальных валют</h3>

				<label className={styles.search_field}>
					<h4 className={styles.label_search}>Поиск валют</h4>
					<input
						className={styles.search_input_currencies}
						onChange={e => setSearchValue(e.target.value)}
						type='text'
					/>
				</label>

				<div className={styles.list_currency}>
					{filteredCurrencies.length > 0 ? (
						filteredCurrencies.map(currency => (
							<button
								onClick={() => onSelectCurrency(currency)}
								key={currency.label}
								className={styles.currency}
								type='button'
							>
								<Badge className={styles.currency_badge}>
									<img
										className={styles.currency_icon}
										src={currency.urlIcon}
										alt={currency.label}
									/>
								</Badge>
								<div className={styles.currency_info}>
									<p className={styles.currency_value}>{currency.value}</p>
									<p className={styles.currency_label}>{currency.label}</p>
								</div>
							</button>
						))
					) : (
						<p className={styles.no_results}>Ничего не найдено</p>
					)}
				</div>
			</div>
		</div>
	)
}
