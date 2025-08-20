import cn from 'clsx'
import Image from 'next/image'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './GlobalCashList.module.scss'

export function GlobalCashList() {
	return (
		<div>
			<div className={styles.list}>
				<BgCard className={styles.bg_card}>
					<Title
						className={styles.card_title}
						size='md'
					>
						Европа
					</Title>
					<Badge className={styles.card_badge}>EU</Badge>

					<Image
						className={styles.image}
						src={'/images/global-cash/europe.png'}
						width={158}
						height={220}
						alt='Европа'
					/>
				</BgCard>

				<BgCard className={styles.bg_card}>
					<Title
						className={styles.card_title}
						size='md'
					>
						Азия
					</Title>

					<Badge className={styles.card_badge}>SEA</Badge>

					<Image
						className={styles.image}
						src={'/images/global-cash/asia.png'}
						width={191}
						height={233}
						alt='Азия'
					/>
				</BgCard>

				<BgCard className={styles.bg_card}>
					<Title
						className={styles.card_title}
						size='md'
					>
						СНГ
					</Title>
					<Badge className={styles.card_badge}>CIS</Badge>

					<Image
						className={styles.image}
						src={'/images/global-cash/cis.png'}
						width={228}
						height={228}
						alt='СНГ'
					/>
				</BgCard>

				<BgCard className={styles.bg_card}>
					<Title
						className={styles.card_title}
						size='md'
					>
						Америка
					</Title>
					<Badge className={styles.card_badge}>NA</Badge>

					<Image
						className={styles.image}
						src={'/images/global-cash/america.png'}
						width={143}
						height={238}
						alt='Европа'
					/>
				</BgCard>
			</div>

			<BgCard className={cn(styles.card, styles.card_last)}>
				<div>
					<div className={styles.badges}>
						<Badge
							className={styles.badge}
							size='md'
						>
							<Image
								src={'/images/icons/global-cash.svg'}
								width={27}
								height={27}
								alt=''
							/>
						</Badge>

						<Badge
							className={styles.badge}
							size='md'
						>
							Курьер
						</Badge>

						<Badge
							className={styles.badge}
							size='md'
						>
							Касса
						</Badge>
					</div>

					<Title
						className={styles.title}
						typeTag='h3'
						size='md'
					>
						И 70+ стран по всему миру
					</Title>

					<div className={styles.text}>
						<Text>
							Demo имеет множество касс по всему миру, имеется доставка курьером и возможность
							забрать в кассе
						</Text>
					</div>
				</div>

				<LinkButton
					href={publicUrl.cash()}
					className={styles.link_button}
				>
					Детальнее
				</LinkButton>
			</BgCard>
		</div>
	)
}
