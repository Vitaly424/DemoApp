import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './BusinessTransfers.module.scss'

export function BusinessTransfers() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
						typeTag='h1'
					>
						Онлайн переводы для бизнеса в&nbsp;SWIFT & SEPA зоне
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Интегрированная система SWIFT и&nbsp; SEPA-переводов, оптимизированная для российского
						бизнеса и&nbsp;упрощающая международные расчёты.
					</Text>

					<LinkButton
						className={styles.link_button}
						size='md'
					>
						Создать заявку
					</LinkButton>
				</div>

				<div className={styles.image_decor_1}>
					<Image
						src='/images/decor/decor-1.png'
						width={239}
						height={237}
						alt=''
					/>
				</div>
			</Container>
		</section>
	)
}
