'use client'

import cn from 'clsx'

import { PaymentOptionsCard } from '../payment-options-card/PaymentOptionsCard'
import { paymentOptionsListData } from '../payment-options-list.data'

import styles from './PaymentOptionsTicker.module.scss'

export function PaymentOptionsTicker() {
	const doubledList = [...paymentOptionsListData, ...paymentOptionsListData]

	return (
		<div className={styles.ticker_wrapper}>
			<div className={styles.ticker_track}>
				{doubledList.map((item, idx) => (
					<PaymentOptionsCard
						key={idx}
						className={cn(styles.ticker_card, styles[item.class])}
						title={item.title}
						image={item.image}
					/>
				))}
			</div>
		</div>
	)
}
