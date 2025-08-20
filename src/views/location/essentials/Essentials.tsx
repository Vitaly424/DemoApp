import { Container } from '@/components/ui/container/Container'
import { Title } from '@/components/ui/title/Title'

import { EssentialsList } from './essentials-list/EssentialsList'

import styles from './Essentials.module.scss'

export function Essentials() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						position='center'
						className={styles.title}
					>
						А так же необходимые удобства
					</Title>
				</div>

				<EssentialsList />
			</Container>
		</section>
	)
}
