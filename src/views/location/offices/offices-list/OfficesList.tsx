import Image from 'next/image'

import { Badge } from '@/components/ui/badge/Badge'
import { BgCard } from '@/components/ui/bg-card/BgCard'
import { IconSvg } from '@/components/ui/icon/Icon'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './OfficesList.module.scss'

export function OfficesList() {
	return (
		<div className={styles.list}>
			<BgCard className={styles.offices_card}>
				<div className={styles.content}>
					<div className={styles.heading}>
						<Title size='md_2'>Офис</Title>
						<Badge size='lg'>1</Badge>
					</div>

					<div className={styles.info}>
						<Text
							size='md'
							variant='dark'
						>
							Адрес: Пресненская набережная, 12, Башня Федерация, Москва
						</Text>
					</div>

					<div className={styles.links}>
						<a href='#'>
							Google maps{' '}
							<IconSvg
								className={styles.links_arrow}
								id='arrow'
							/>
						</a>
						<a href='#'>
							Яндекс карты{' '}
							<IconSvg
								className={styles.links_arrow}
								id='arrow'
							/>
						</a>
					</div>
				</div>

				<div className={styles.image}>
					<Image
						src='/images/office/federation-tower.png'
						width={197}
						height={367}
						alt=''
					/>
				</div>
			</BgCard>

			<BgCard className={styles.offices_card}>
				<div className={styles.content}>
					<div className={styles.heading}>
						<Title
							className={styles.title}
							size='md_2'
						>
							Офис
						</Title>
						<Badge size='lg'>2</Badge>
					</div>

					<div className={styles.info}>
						<Text
							size='md'
							variant='dark'
						>
							Адрес: Южное Тушино, Строительный проезд 7а
						</Text>
					</div>

					<div className={styles.links}>
						<a href='#'>
							Google maps{' '}
							<IconSvg
								className={styles.links_arrow}
								id='arrow'
							/>
						</a>
						<a href='#'>
							Яндекс карты{' '}
							<IconSvg
								className={styles.links_arrow}
								id='arrow'
							/>
						</a>
					</div>
				</div>

				<div className={styles.image}>
					<Image
						src='/images/office/stroitelny-passage.png'
						width={197}
						height={367}
						alt=''
					/>
				</div>
			</BgCard>
		</div>
	)
}
