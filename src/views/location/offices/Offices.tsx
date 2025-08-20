import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { OfficesList } from './offices-list/OfficesList'

import styles from './Offices.module.scss'

export function Offices() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title className={styles.title}>Офисы Demo</Title>

					<Text
						size='md'
						className={styles.text}
					>
						Это удобное, технологичное и&nbsp;продуманное пространство для эффективной работы
						и&nbsp;делового взаимодействия, где каждая деталь создана для комфорта сотрудников
						и&nbsp;гостей.
					</Text>
				</div>

				<OfficesList />
			</Container>
		</section>
	)
}
