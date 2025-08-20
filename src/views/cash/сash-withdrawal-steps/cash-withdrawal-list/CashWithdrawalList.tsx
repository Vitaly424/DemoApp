import cn from 'clsx'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { cashWithdrawalListData } from './cash-withdrawal-list.data'

import styles from './CashWithdrawalList.module.scss'

export function CashWithdrawalList() {
	return (
		<div>
			<div className={styles.box}>
				{cashWithdrawalListData.map(item => (
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
						Выдача наличных
					</Title>

					<div className={styles.text}>
						<Text>Отдаем наличные вашему представителю в необходимой стране</Text>
					</div>
				</div>

				<LinkButton className={styles.link_button_desktop}>Создать заявку</LinkButton>
			</BgCard>
		</div>
	)
}
