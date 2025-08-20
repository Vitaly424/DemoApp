import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './CooperationBenefitsList.module.scss'

export function CooperationBenefitsList() {
	return (
		<div>
			<div className={styles.box}>
				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/boost.svg'
							width={29}
							height={38}
							alt=''
						/>
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Ускорение финансовых процессов
					</Title>

					<div className={styles.text}>
						<Text>Гарантируем быструю оплату вашим поставщикам и партнёрам за рубежом.</Text>
					</div>
				</BgCard>

				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/legality.svg'
							width={35}
							height={35}
							alt=''
						/>
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Легальность и прозрачность 
					</Title>

					<div className={styles.text}>
						<Text>
							Все операции проходят в соответствии с российским законодательством и международными
							нормами.
						</Text>
					</div>
				</BgCard>

				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/optimal-courses.svg'
							width={35}
							height={35}
							alt=''
						/>
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Оптимальные курсы 
					</Title>

					<div className={styles.text}>
						<Text>
							Предлагаем выгодную конвертацию благодаря надёжным партнёрским соглашениям с банками.
						</Text>
					</div>
				</BgCard>

				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/safety.svg'
							width={35}
							height={35}
							alt=''
						/>
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Минимизация рисков 
					</Title>

					<div className={styles.text}>
						<Text>
							Контролируем процесс оплаты и помогаем избежать валютных и регуляторных ограничений.
						</Text>
					</div>
				</BgCard>
			</div>
		</div>
	)
}
