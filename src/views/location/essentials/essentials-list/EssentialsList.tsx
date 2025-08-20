import cn from 'clsx'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './EssentialsList.module.scss'

export function EssentialsList() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/safety.svg'
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
						Безопасность
					</Title>

					<div className={styles.text}>
						<Text>
							Офисы оборудованы современными системами видеонаблюдения и контроля доступа, чтобы вы
							чувствовали себя спокойно и уверенно в любое время суток.
						</Text>
					</div>
				</BgCard>

				<BgCard className={styles.card}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/portfolio.svg'
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
						Все для работы
					</Title>

					<div className={styles.text}>
						<Text>
							В распоряжении сотрудников — профессиональная машинка для счёта денег, сейфы и все
							необходимые условия для безопасной и удобной работы с финансовыми операциями.
						</Text>
					</div>
				</BgCard>
			</div>

			<BgCard className={cn(styles.card, styles.card_last)}>
				<div className={styles.card_last_content}>
					<Badge
						className={styles.badge}
						size='sm'
					>
						<Image
							src='/images/icons/comfort.svg'
							width={37}
							height={38}
							alt=''
						/>
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Комфорт
					</Title>

					<div className={styles.text}>
						<Text>
							Удобные кресла, кофемашина, рабочие места с хорошим освещением и приятной атмосферой —
							чтобы работать было не только продуктивно, но и приятно.
						</Text>
					</div>
				</div>

				<div className={styles.card_last_img}>
					<Image
						src='/images/comfort.png'
						width={319}
						height={319}
						alt=''
					/>
				</div>
			</BgCard>
		</div>
	)
}
