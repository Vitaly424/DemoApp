'use client'

import cn from 'clsx'
import Image from 'next/image'
import { useEffect } from 'react'

import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'

import { useScrollTrigger } from '@/hooks/useScrollTrigger'

import styles from './FastCashoutList.module.scss'

export function FastCashoutList() {
	const { sectionRef, isActive } = useScrollTrigger(0.3)

	useEffect(() => {
		console.log('isActive', isActive)
	}, [isActive])

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
					<span></span> Доллары
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Евро
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> USDT
				</BgCard>

				<BgCard className={styles.card_text}>
					<span></span> Рубли
				</BgCard>
			</div>

			<div className={styles.image_wrap}>
				<Image
					src='/images/fast-cashout.png'
					alt=''
					width={550}
					height={315}
				/>
			</div>

			<div className={styles.link_button_wrap}>
				<LinkButton>Создать заявку</LinkButton>
			</div>
		</BgCard>
	)
}
