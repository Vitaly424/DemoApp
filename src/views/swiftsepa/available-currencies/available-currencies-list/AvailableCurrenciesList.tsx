import { BgCard } from '@/components/ui/bg-card/BgCard'

import styles from './AvailableCurrenciesList.module.scss'

export function AvailableCurrenciesList() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.list}>
				<BgCard className={styles.card}>
					<span></span>Доллар
				</BgCard>
				<BgCard className={styles.card}>
					<span></span>Рубль
				</BgCard>
				<BgCard className={styles.card}>
					<span></span>Евро
				</BgCard>
			</div>
			<div className={styles.list_last}>
				<BgCard className={styles.card}>
					<span></span>Юань
				</BgCard>
				<BgCard className={styles.card}>
					<span></span>Корейская вона
				</BgCard>
			</div>
		</div>
	)
}
