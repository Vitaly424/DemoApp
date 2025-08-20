import cn from 'clsx'
import Image from 'next/image'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { globalTransferData } from '../global-transfers.data'

import styles from './GlobalTransferList.module.scss'

export function GlobalTransferList() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.box}>
				{globalTransferData.map(item => (
					<BgCard
						className={styles.card}
						key={item.number}
					>
						{/* <span className={styles.number}>{item.number}</span> */}

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
						Отчет и результаты!
					</Title>

					<div className={styles.text}>
						<Text>98% Наших платежей приходят вовремя и не терятся в процессе.</Text>
					</div>

					<LinkButton
						href={publicUrl.paymentAgent()}
						className={styles.link_button_mobile}
					>
						Детальнее
					</LinkButton>
				</div>

				<div className={styles.image}>
					<Image
						src='/images/global-transfer.png'
						width={350}
						height={350}
						alt=''
					/>
				</div>

				<div className={styles.image_mobile}>
					<Image
						src='/images/global-transfer-mobile.png'
						width={125}
						height={125}
						alt=''
					/>
				</div>

				<LinkButton
					href={publicUrl.paymentAgent()}
					className={styles.link_button_desktop}
				>
					Детальнее
				</LinkButton>
			</BgCard>
		</div>
	)
}
