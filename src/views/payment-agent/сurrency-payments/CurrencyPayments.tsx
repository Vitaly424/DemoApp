import Image from 'next/image'

import { Accordion } from '@/components/ui/accordion/Accordion'
import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './CurrencyPayments.module.scss'

export function CurrencyPayments() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
						typeTag='h1'
					>
						Платежный агент Demo надёжные расчёты в&nbsp;валюте по
						<br />
						всему миру
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Организуем оплату зарубежным контрагентам от&nbsp;лица вашей компании, обеспечивая
						безопасность и&nbsp;соответствие требованиям валютного контроля.
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

				<div className={styles.accordion}>
					<div className={styles.image_decor_2}>
						<Image
							src='/images/decor/decor-2.png'
							width={319}
							height={223}
							alt=''
						/>
					</div>

					<Accordion />
				</div>
			</Container>
		</section>
	)
}
