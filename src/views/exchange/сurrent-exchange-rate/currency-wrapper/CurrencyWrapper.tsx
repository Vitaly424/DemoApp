'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { BgCard } from '@/components/ui/bg-card/BgCard'

import type { CurrencyItem, SelectedSide } from '../currencies.types'
import { CurrencySelection } from '../currency-selection/CurrencySelection'
import { CurrencyConverter } from '../сurrency-сonverter/CurrencyConverter'

import styles from './CurrencyWrapper.module.scss'

export function CurrencyWrapper() {
	const [isShowCurrenctySelection, setIsShowCurrenctySelection] = useState(false)
	const [selectedSide, setSelectedSide] = useState<SelectedSide>('from')

	const [fromInputValue, setFromInputValue] = useState('0')
	const [toResultValue] = useState('0')

	useEffect(() => {
		console.log('fromInputValue', fromInputValue)
	}, [fromInputValue])

	const [fromCurrency, setFromCurrency] = useState<CurrencyItem>({
		value: 'usdt',
		label: 'Tether USDT',
		urlIcon: '/images/icons/currencies/usdt.svg',
		category: 'crypto'
	})

	const [toCurrency, setToCurrency] = useState<CurrencyItem>({
		value: 'rub',
		label: 'Рубли ₽',
		urlIcon: '/images/icons/currencies/rub.svg',
		category: 'fiat'
	})

	const onCurrencyReverse = () => {
		setFromCurrency({ ...toCurrency })
		setToCurrency({ ...fromCurrency })
	}

	const onBackConverter = () => {
		setIsShowCurrenctySelection(false)
	}

	const onShowCurrencySelection = (selectedSide: SelectedSide) => {
		setSelectedSide(selectedSide)
		setIsShowCurrenctySelection(true)
	}

	const onSelectCurrency = (currency: CurrencyItem) => {
		if (selectedSide === 'from') setFromCurrency(currency)
		else setToCurrency(currency)

		onBackConverter()
	}

	return (
		<div className={styles.currency_wrapper}>
			<BgCard className={styles.exchange_card}>
				<AnimatePresence mode='wait'>
					{isShowCurrenctySelection ? (
						<motion.div
							key='currency-selection'
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -50 }}
							transition={{ duration: 0.4 }}
						>
							<CurrencySelection
								onBackConverter={onBackConverter}
								onSelectCurrency={onSelectCurrency}
							/>
						</motion.div>
					) : (
						<motion.div
							key='currency-converter'
							initial={{ opacity: 0, x: -50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.4 }}
						>
							<CurrencyConverter
								onCurrencyReverse={onCurrencyReverse}
								setFromInputValue={setFromInputValue}
								fromInputValue={fromInputValue}
								fromCurrency={fromCurrency}
								toResultValue={toResultValue}
								toCurrency={toCurrency}
								onShowCurrencySelection={onShowCurrencySelection}
							/>
						</motion.div>
					)}
				</AnimatePresence>
			</BgCard>
		</div>
	)
}
