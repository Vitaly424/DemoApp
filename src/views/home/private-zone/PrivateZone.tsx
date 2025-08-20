import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './PrivateZone.module.scss'

export function PrivateZone() {
	return (
		<section className={styles.section}>
			<Container>
				<BgCard
					className={styles.bg_card}
					variant='dark'
				>
					<div className={styles.heading}>
						<div className={styles.top}>
							<Title
								className={styles.title}
								size='md'
							>
								Private Banking Demo
							</Title>

							<div className={styles.badge}>VIP</div>
						</div>

						<div className={styles.text}>
							<Text>
								Demo предлагает особые условия обслуживания для своих VIP клиентов, особые условия
								не оставят вас равнодушными.
							</Text>
						</div>
					</div>

					<LinkButton className={styles.link_button}>Детальнее</LinkButton>
				</BgCard>
			</Container>
		</section>
	)
}
