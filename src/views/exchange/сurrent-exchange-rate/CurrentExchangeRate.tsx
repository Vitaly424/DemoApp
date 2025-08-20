import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Title } from '@/components/ui/title/Title'

import { CurrencyWrapper } from './currency-wrapper/CurrencyWrapper'

import styles from './CurrentExchangeRate.module.scss'

export function CurrentExchangeRate() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
					>
						Актуальный курс обмена
					</Title>
				</div>

				<CurrencyWrapper />

				<div className={styles.image_decor_rate}>
					<Image
						src='/images/decor/decor-8.png'
						width={319}
						height={223}
						alt=''
					/>
				</div>
			</Container>
		</section>
	)
}
