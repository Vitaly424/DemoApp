import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { AvailableCurrenciesList } from './available-currencies-list/AvailableCurrenciesList'

import styles from './AvailableCurrencies.module.scss'

export function AvailableCurrencies() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						position='center'
						className={styles.title}
					>
						Валюты доступные для оплат
					</Title>

					<Text
						className={styles.text}
						position='center'
						size='md'
					>
						Demo предоставляет своим клиентам возможность оплачивать инвойсы по множеству позиций,
						во всех популярных мировых валютах
					</Text>
				</div>

				<AvailableCurrenciesList />

				<div className={styles.image_decor_currency}>
					<Image
						src='/images/decor/decor-5.png'
						width={500}
						height={500}
						alt=''
					/>
				</div>
			</Container>
		</section>
	)
}
