'use client'

import cn from 'clsx'
import Image from 'next/image'

import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'

import { useScrollTrigger } from '@/hooks/useScrollTrigger'

import styles from './CarInvoiceDealsList.module.scss'

export function CarInvoiceDealsList() {
	const { sectionRef, isActive } = useScrollTrigger(0.3)

	return (
		<BgCard
			className={styles.bg_card}
			ref={sectionRef as React.RefObject<HTMLDivElement>}
		>
			<div
				className={cn(
					{
						[styles.hidden_list]: isActive
					},
					styles.list
				)}
			>
				<BgCard className={styles.card_text}>
					<span></span> Спец. Техника
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Грузовые авто
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Легковые Авто
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Автосалоны
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Аукционы
				</BgCard>
			</div>

			<div className={styles.image_wrap}>
				<Image
					src='/images/car.png'
					alt=''
					width={846}
					height={315}
				/>
			</div>

			<div className={styles.link_button_wrap}>
				<LinkButton>Создать заявку</LinkButton>
			</div>
		</BgCard>
	)
}
