import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { GlobalCashList } from './global-cash-list/GlobalCashList'

import styles from './GlobalСash.module.scss'

export function GlobalСash() {
	return (
		<section className={styles.section}>
			<Container>
				<div>
					<div className={styles.heading}>
						<Title className={styles.title}>Выдача наличных по всему миру в любое время</Title>

						<div className={styles.text}>
							<Text size='md'>
								Наш сервис позволяет вам отправлять наличные в любую точку мира с максимальным
								удобством и оперативностью. Наша цель – сделать процесс конвертации и перевода
								максимально простым и быстрым, где бы вы ни оказались.
							</Text>
						</div>
					</div>

					<GlobalCashList />
				</div>

				<Image
					className={styles.image_decor}
					src='/images/decor/global.png'
					alt=''
					width={647}
					height={625}
				/>
			</Container>
		</section>
	)
}
