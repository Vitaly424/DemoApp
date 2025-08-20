import cn from 'clsx'
import Image from 'next/image'

import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Title } from '@/components/ui/title/Title'

import styles from './PaymentOptionsCard.module.scss'

interface PaymentOptionsCardProps {
	title: string
	className?: string
	image: {
		url: string
		alt: string
		width: number
		height: number
	}
}

export function PaymentOptionsCard(props: PaymentOptionsCardProps) {
	const { title, image, className } = props

	return (
		<BgCard className={cn(styles.bg_card, className)}>
			<Title
				typeTag='h3'
				size='md'
			>
				{title}
			</Title>

			<Image
				className={styles.image_content}
				src={image.url}
				alt={image.alt}
				width={image.width}
				height={image.height}
				priority
			/>
		</BgCard>
	)
}
