import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './CashNow.module.scss'

export function CashNow() {
	return (
		<div>
			<section className={styles.section}>
				<Container>
					<div className={styles.heading}>
						<Title
							className={styles.title}
							position='center'
							typeTag='h1'
						>
							Выдаем наличные по всему миру стол в стол за 30 минут
						</Title>

						<Text
							position='center'
							size='md'
							className={styles.text}
						>
							Наш сервис выдает наличные по лучшему курсу на рынке обладая большими резервами
						</Text>

						<LinkButton
							className={styles.link_button}
							size='md'
						>
							Создать заявку
						</LinkButton>
					</div>

					<div className={styles.image_decor_cash}>
						<Image
							src='/images/decor/decor-9.png'
							width={340}
							height={340}
							alt=''
						/>
					</div>

					<div className={styles.image_decor_cash_two}>
						<Image
							src='/images/decor/decor-10.png'
							width={450}
							height={450}
							alt=''
						/>
					</div>
				</Container>
			</section>
		</div>
	)
}
