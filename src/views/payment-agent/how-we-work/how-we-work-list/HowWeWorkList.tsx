import cn from 'clsx'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { howWeWorkListData } from './how-we-work-list.data'

import styles from './HowWeWorkList.module.scss'

export function HowWeWorkList() {
	return (
		<div>
			<div className={styles.box}>
				{howWeWorkListData.map(item => (
					<BgCard
						className={styles.card}
						key={item.number}
					>
						<Badge
							className={styles.badge}
							size='lg'
						>
							{item.number}
						</Badge>

						<Title
							className={styles.title}
							typeTag='h3'
							size='md'
						>
							{item.title}
						</Title>

						<div className={styles.text}>
							<Text>{item.description}</Text>
						</div>
					</BgCard>
				))}
			</div>

			<BgCard className={cn(styles.card, styles.card_last)}>
				<div className={styles.card_last_content}>
					<Badge
						className={styles.badge}
						size='lg'
					>
						4
					</Badge>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						Оплата зарубежного счёта
					</Title>

					<div className={styles.text}>
						<Text>
							Оплачиваем зарубежный инвойс напрямую от вашего имени, исключая сложные
							бюрократические процедуры.
						</Text>
					</div>
				</div>

				<LinkButton className={styles.link_button_desktop}>Создать заявку</LinkButton>
			</BgCard>
		</div>
	)
}
