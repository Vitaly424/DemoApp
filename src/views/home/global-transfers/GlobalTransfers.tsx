import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { GlobalTransferList } from './global-transfer-list/GlobalTransferList'

import styles from './GlobalTransfers.module.scss'

export function GlobalTransfers() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						position='center'
						className={styles.title}
					>
						Международные платежи и переводы для ВЭД под ключ
					</Title>

					<Text
						position='center'
						size='md'
					>
						Мы предлагаем комплексные решения: валютный контроль, международные расчёты,
						финансирование ВЭД и управление рисками. Помогаем снижать финансовые риски и повышать
						прибыльность бизнеса.
					</Text>
				</div>

				<GlobalTransferList />
			</Container>
		</section>
	)
}
