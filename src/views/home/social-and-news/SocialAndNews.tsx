import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './SocialAndNews.module.scss'

export function SocialAndNews() {
	return (
		<section>
			<Container>
				<div className={styles.heading}>
					<Title position='center'>Социальные сети и новости</Title>
				</div>

				<div className={styles.list}>
					<BgCard className={styles.bg_card}>
						<Badge
							className={styles.badge}
							size='lg'
						>
							<Image
								src='/images/icons/telegram.svg'
								width={35}
								height={35}
								alt=''
							/>
						</Badge>

						<Title
							className={styles.title}
							typeTag='h3'
							size='md'
						>
							Группа ВЭД
						</Title>

						<div className={styles.text}>
							<Text>
								Следите за нашей группой ВЭД, где решаются проблемы людей со Swift/Sepa платежами
							</Text>
						</div>

						<a
							className={styles.link}
							href='#'
						>
							<Image
								src='/images/icons/arrow_2.svg'
								alt=''
								width={22}
								height={23}
							/>
						</a>
					</BgCard>

					<BgCard className={styles.bg_card}>
						<Badge
							className={styles.badge}
							size='lg'
						>
							<Image
								src='/images/icons/telegram.svg'
								width={35}
								height={35}
								alt=''
							/>
						</Badge>

						<Title
							className={styles.title}
							typeTag='h3'
							size='md'
						>
							Новостной канал
						</Title>

						<div className={styles.text}>
							<Text>Новости и акции от Demo</Text>
						</div>

						<a
							className={styles.link}
							href='#'
						>
							<Image
								src='/images/icons/arrow_2.svg'
								alt=''
								width={22}
								height={23}
							/>
						</a>
					</BgCard>
				</div>
			</Container>
		</section>
	)
}
