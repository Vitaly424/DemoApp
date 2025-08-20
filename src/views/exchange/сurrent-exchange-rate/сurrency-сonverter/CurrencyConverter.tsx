import Image from 'next/image'

import { LinkButton } from '@/components/ui/link-button/LinkButton'

import type { CurrencyItem, SelectedSide } from '../currencies.types'
import { CurrencyField } from '../currency-field/CurrencyField'

import styles from './CurrencyConverter.module.scss'

interface CurrencyConverterProps {
	onShowCurrencySelection: (selectedSide: SelectedSide) => void
	fromCurrency: CurrencyItem
	toCurrency: CurrencyItem
	fromInputValue: string
	toResultValue: string
	setFromInputValue: (value: string) => void
	onCurrencyReverse: () => void
}

export function CurrencyConverter(props: CurrencyConverterProps) {
	const {
		onShowCurrencySelection,
		fromCurrency,
		toCurrency,
		fromInputValue,
		toResultValue,
		setFromInputValue,
		onCurrencyReverse
	} = props

	return (
		<div>
			<CurrencyField
				onShowCurrencySelection={() => onShowCurrencySelection('from')}
				isShowCourse={true}
				isPlaceholder={true}
				label='Вы отдаете'
				value={fromInputValue}
				imageUrl={fromCurrency.urlIcon}
				name={fromCurrency.value}
				setFromInputValue={setFromInputValue}
			/>

			<div className={styles.exchange_center}>
				<button
					type='button'
					className={styles.exchange_arrows}
					onClick={onCurrencyReverse}
				>
					<Image
						src='/images/icons/group-arrow.svg'
						width={38}
						height={24}
						alt=''
					/>
				</button>
			</div>

			<CurrencyField
				isDisplay={true}
				onShowCurrencySelection={() => onShowCurrencySelection('to')}
				label='Вы получаете'
				value={toResultValue}
				imageUrl={toCurrency.urlIcon}
				name={toCurrency.value}
			/>

			<div className={styles.exchange_footer}>
				<div className={styles.logo_image}>
					<Image
						src='/images/logo-gray.svg'
						width={212}
						height={45}
						alt=''
					/>
				</div>
				<LinkButton size='md'>Создать заявку</LinkButton>
			</div>
		</div>
	)
}
