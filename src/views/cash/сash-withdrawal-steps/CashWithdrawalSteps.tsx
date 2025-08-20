import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Title } from '@/components/ui/title/Title'

import { CashWithdrawalList } from './cash-withdrawal-list/CashWithdrawalList'

import styles from './CashWithdrawalSteps.module.scss'

export function CashWithdrawalSteps() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title className={styles.title}>Как совершить выдачу наличных по этапам?</Title>

					<div className={styles.image_decor_cash_steps}>
						<Image
							src='/images/decor/decor-11.png'
							alt=''
							width={400}
							height={148}
						/>
					</div>
				</div>

				<CashWithdrawalList />
			</Container>
		</section>
	)
}
