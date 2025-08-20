import { Container } from '@/components/ui/container/Container'
import { Title } from '@/components/ui/title/Title'

import { HowWeWorkList } from './how-we-work-list/HowWeWorkList'

import styles from './HowWeWork.module.scss'

export function HowWeWork() {
	return (
		<section className={styles.section}>
			<Container>
				<Title
					className={styles.title}
					position='center'
				>
					Как мы работаем поэтапно
				</Title>

				<HowWeWorkList />
			</Container>
		</section>
	)
}
