import cn from 'clsx'
import Image from 'next/image'

import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Title } from '@/components/ui/title/Title'

import styles from './ReliablePaymentsCard.module.scss'

export interface ReliablePaymentsData {
	label: string
}

type ReliablePaymentsCardVariant = 'blue' | 'white'

interface ReliablePaymentsCardProps {
	className?: string
	variant?: ReliablePaymentsCardVariant
	title: string
	data: ReliablePaymentsData[]
	imageUrl?: string
}

export function ReliablePaymentsCard(props: ReliablePaymentsCardProps) {
	const {
		className,
		title,
		data,
		imageUrl = '/images/home-reliable-payments1.png',
		variant = 'white'
	} = props

	return (
		<BgCard
			className={cn(styles.card, styles[variant], className)}
			variant={variant}
		>
			<div>
				<Title
					className={styles.title}
					size='md'
				>
					{title}
				</Title>

				<ul className={styles.list}>
					{data.map((item, index) => (
						<li
							className={styles.item}
							key={index}
						>
							{item.label}
						</li>
					))}
				</ul>
			</div>

			<div className={styles.image}>
				<Image
					src={imageUrl}
					alt=''
					width={369}
					height={369}
				/>
			</div>
		</BgCard>
	)
}
