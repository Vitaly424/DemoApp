import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { FastCashoutList } from './fast-cashout-list/FastCashoutList'

import styles from './FastCashout.module.scss'

export function FastCashout() {
	return (
		<section>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
					>
						Обменивайте криптовалюту на&nbsp;наличные быстро
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Избавьте себя от&nbsp;труднодоступности достать наличные, получайте наличные сразу
						у&nbsp;нас в&nbsp;офисе
					</Text>
				</div>

				<FastCashoutList />
			</Container>
		</section>
	)
}
