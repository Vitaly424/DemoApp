import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './CryptoExchangePromo.module.scss'

export function CryptoExchangePromo() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
						typeTag='h1'
					>
						Выгодно обменивайте криптовалюты и получайте наличные
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Demo дает гибкие варианты обмена USDT на&nbsp;множество валют и&nbsp;наоборот
					</Text>

					<LinkButton
						className={styles.link_button}
						size='md'
					>
						Создать заявку
					</LinkButton>
				</div>

				<div className={styles.image_decor_exchange}>
					<Image
						src='/images/decor/decor-7.png'
						width={323}
						height={286}
						alt=''
					/>
				</div>
			</Container>
		</section>
	)
}
