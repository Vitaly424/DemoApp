import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './LocationAndDirections.module.scss'

export function LocationAndDirections() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
						typeTag='h1'
					>
						Где мы&nbsp; находимся и как к&nbsp; нам добраться?
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Мы&nbsp;заботимся о&nbsp;времени наших клиентов, именно по&nbsp;этому вы&nbsp;можете
						добраться к&nbsp;нам быстро с&nbsp;любой части города Москва
					</Text>

					<div className={styles.image_decor_heading}>
						<Image
							src='/images/decor/decor-3.png'
							width={302}
							height={302}
							alt=''
						/>
					</div>
				</div>

				<div className={styles.cards}>
					<div className={styles.cards_top}>
						<BgCard
							className={styles.bg_card}
							size='sm'
						>
							<Badge
								className={styles.badge}
								size='sm'
							>
								15 Min
							</Badge>

							<Title
								size='sm'
								typeTag='h4'
							>
								Среднее время от&nbsp;клиента до&nbsp;нас
							</Title>
						</BgCard>

						<BgCard
							className={styles.bg_card}
							size='sm'
						>
							<Badge
								className={styles.badge}
								size='sm'
							>
								Топ локации
							</Badge>
							<Title
								size='sm'
								typeTag='h4'
							>
								Удобное расположение
							</Title>
						</BgCard>
					</div>

					<BgCard
						className={styles.bg_card}
						size='sm'
					>
						<Badge
							className={styles.badge}
							size='sm'
						>
							Безопасность
						</Badge>

						<Title
							className={styles.bg_card_title}
							size='sm'
							typeTag='h4'
						>
							Контрольно пропускные пункты с&nbsp;охраной и&nbsp;входом по&nbsp;приглашению
						</Title>
					</BgCard>

					<div className={styles.image_decor_cards}>
						<Image
							src='/images/decor/decor-4.png'
							width={263}
							height={263}
							alt=''
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
