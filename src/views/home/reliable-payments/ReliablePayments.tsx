import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import {
	ReliablePaymentsCard,
	type ReliablePaymentsData
} from './reliable-payments-card/ReliablePaymentsCard'

import styles from './ReliablePayments.module.scss'

const individualsData: ReliablePaymentsData[] = [
	{
		label: 'Работающие за границей.'
	},
	{
		label: 'Поддерживающие близких.'
	},
	{
		label: 'Фрилансеры.'
	},
	{
		label: 'Индивидуальные предприниматели.'
	},
	{
		label: 'Владельцы международных активов.'
	},
	{
		label: 'Инвесторы.'
	}
]

const legalEntities: ReliablePaymentsData[] = [
	{
		label: 'Экспортеры и импортеры'
	},
	{
		label: 'IT-компании.'
	},
	{
		label: 'Логистические фирмы.'
	},
	{
		label: 'Поставщики услуг.'
	},
	{
		label: 'Производственные предприятия.'
	},
	{
		label: 'Малый и средний бизнес.'
	}
]

export function ReliablePayments() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
					>
						Надежные платежные решения для всех клиентов
					</Title>

					<Text
						className={styles.text}
						position='center'
						size='md'
					>
						Наш сервис охватывает все виды международных переводов
					</Text>
				</div>

				<div className={styles.content}>
					<ReliablePaymentsCard
						className={styles.card}
						title='Физических лиц'
						data={individualsData}
					/>

					<ReliablePaymentsCard
						imageUrl='/images/home-reliable-payments2.png'
						title='Юридических лиц'
						variant='blue'
						data={legalEntities}
					/>
				</div>

				<Image
					className={styles.image_decor}
					src='/images/decor/euro.png'
					alt=''
					width={261}
					height={267}
				/>
			</Container>
		</section>
	)
}
