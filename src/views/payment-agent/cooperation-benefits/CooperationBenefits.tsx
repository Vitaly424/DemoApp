import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { CooperationBenefitsList } from './cooperation-benefits-list/CooperationBenefitsList'

import styles from './CooperationBenefits.module.scss'

export function CooperationBenefits() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<div>
						<Title className={styles.title}>Преимущества сотрудничества</Title>

						<Text
							className={styles.text}
							size='md'
						>
							Организуем оплату зарубежным контрагентам от&nbsp;лица вашей компании, обеспечивая
							безопасность и&nbsp;соответствие требованиям валютного контроля.
						</Text>
					</div>
					<div className={styles.image}>
						<Image
							src='/images/employee-advantage.png'
							alt=''
							width={371}
							height={370}
						/>
					</div>
				</div>

				<CooperationBenefitsList />
			</Container>
		</section>
	)
}
