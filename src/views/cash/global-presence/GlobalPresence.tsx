'use client'

import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { GlobalPresenceInfo } from './global-presence-info/GlobalPresenceInfo'

import styles from './GlobalPresence.module.scss'

export function GlobalPresence() {
	return (
		<section>
			<Container className={styles.container}>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
					>
						Мы работаем в 50+ странах по всему миру
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Избавьте себя от труднодоступности достать наличные, получайте наличные сразу у нас в
						офисе
					</Text>
				</div>

				<GlobalPresenceInfo />

				<LinkButton className={styles.link_button}>Создать заявку</LinkButton>
			</Container>
		</section>
	)
}
