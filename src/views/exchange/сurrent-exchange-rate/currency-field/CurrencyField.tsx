import cn from 'clsx'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'

import { formatNumber } from '@/utils/formatNumber'

import styles from './CurrencyField.module.scss'

interface CurrencyFieldProps {
	className?: string
	imageUrl: string
	label: string
	name: string
	isShowCourse?: boolean
	isPlaceholder?: boolean
	isDisplay?: boolean
	value: string
	onShowCurrencySelection: () => void
	setFromInputValue?: (value: string) => void
}

export function CurrencyField(props: CurrencyFieldProps) {
	const {
		imageUrl,
		onShowCurrencySelection,
		name,
		value,
		setFromInputValue,
		isShowCourse = false,
		label,
		isDisplay = false
	} = props

	return (
		<div className={styles.field}>
			<div className={styles.label}>
				<p className={styles.label_title}>{label}</p>

				{isShowCourse && (
					<p className={styles.label_text}>
						Курс: <span>00:00:25</span>
					</p>
				)}
			</div>

			<div className={styles.currency_card}>
				<button
					className={styles.currency_content}
					type='button'
					onClick={onShowCurrencySelection}
				>
					<Badge className={styles.currency_image}>
						<img
							src={imageUrl}
							alt='currency'
						/>
					</Badge>

					<div className={styles.currency_name}>
						<p>{name}</p>
						<Image
							src='/images/icons/arrow-small.svg'
							alt=''
							width={14}
							height={7}
						/>
					</div>
				</button>
				{isDisplay ? (
					<div className={cn(styles.currency_value)}>{formatNumber(value)}</div>
				) : (
					<input
						className={cn(styles.currency_value, styles.currency_input_value)}
						type='number'
						placeholder={value}
						value={value}
						onChange={e => setFromInputValue?.(e.target.value)}
					/>
				)}
			</div>
		</div>
	)
}
