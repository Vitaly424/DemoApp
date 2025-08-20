import cn from 'clsx'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Title } from '@/components/ui/title/Title'

import { PaymentOptionsTicker } from './payment-options-ticker/PaymentOptionsTicker'

import styles from './PaymentOptionsList.module.scss'

export function PaymentOptionsList() {
	return (
		<section className={styles.section}>
			<div>
				<Container>
					<Title
						position='center'
						className={styles.title}
						typeTag='h1'
					>
						Список возможных оплат по SWIFT & SEPA{' '}
					</Title>

					<div className={styles.image_decor_2}>
						<Image
							src='/images/decor/decor-2.png'
							width={319}
							height={223}
							alt=''
						/>
					</div>
				</Container>

				<PaymentOptionsTicker />

				<Container>
					<BgCard className={cn(styles.card, styles.card_last)}>
						<div className={styles.card_last_content}>
							<div className={styles.badgets}>
								<Badge size='lg'>
									<Image
										src='/images/icons/global-cash.svg'
										width={27}
										height={27}
										alt=''
									/>
								</Badge>

								<Badge
									className={styles.badge}
									size='md'
								>
									Все мировые валюты
								</Badge>
							</div>

							<Title
								className={styles.card_title}
								typeTag='h3'
								size='md'
							>
								А так же множество других направлений
							</Title>
						</div>

						<LinkButton className={styles.link_button_desktop}>Создать заявку</LinkButton>
					</BgCard>
				</Container>
			</div>
		</section>
	)
}
