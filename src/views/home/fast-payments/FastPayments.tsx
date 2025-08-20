'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './FastPayments.module.scss'

export function FastPayments() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<motion.div
						initial={{ x: -70, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						transition={{ duration: 0.6, ease: 'easeInOut' }}
						className={styles.content}
					>
						<div className={styles.content}>
							<div className={styles.heading}>
								<Title
									className={styles.title}
									typeTag='h1'
								>
									Быстрые платежи повсему миру для физ и юр. лиц
								</Title>

								<Text
									className={styles.text}
									size='md'
								>
									С нами эффективность платежей бизнеса растет, а расходы падают
								</Text>
							</div>

							<LinkButton
								className={styles.link_button}
								size='md'
							>
								Создать заявку
							</LinkButton>

							<div className={styles.cards}>
								<div className={styles.cards_top}>
									<BgCard
										className={styles.bg_card}
										size='sm'
									>
										<Badge
											className={styles.badge}
											size='sm'
										>
											5000 +
										</Badge>

										<Title
											size='sm'
											typeTag='h4'
										>
											Оплаченых инвойсов
										</Title>
									</BgCard>

									<BgCard
										className={styles.bg_card}
										size='sm'
									>
										<Badge
											className={styles.badge}
											size='sm'
										>
											800 +
										</Badge>
										<Title
											size='sm'
											typeTag='h4'
										>
											Довольных клиентов
										</Title>
									</BgCard>
								</div>

								<BgCard
									className={styles.bg_card}
									size='sm'
								>
									<Badge
										className={styles.badge}
										size='sm'
									>
										87%
									</Badge>

									<Title
										className={styles.title_demo}
										size='sm'
										typeTag='h4'
									>
										Клиентов возвращаются в demo
									</Title>
								</BgCard>
							</div>
						</div>
					</motion.div>
					<motion.div
						className={styles.image}
						initial={{ x: 70, opacity: 0, scale: 0.95 }}
						animate={{ x: 0, opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, ease: 'easeInOut' }}
					>
						<div>
							<Image
								className={styles.image_desktop}
								src='/images/home-fast-payments.png'
								alt=''
								width={578}
								height={761}
								priority
							/>

							<Image
								className={styles.image_mobile}
								src='/images/home-fast-payments-mobile.png'
								alt=''
								width={300}
								height={305}
								priority
							/>
						</div>
					</motion.div>
				</div>
			</Container>
		</section>
	)
}
