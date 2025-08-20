import Image from 'next/image'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { Container } from '@/components/ui/container/Container'
import { LinkButton } from '@/components/ui/link-button/LinkButton'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import styles from './CashToCrypto.module.scss'

export function CashToCrypto() {
	return (
		<section className={styles.section}>
			<Container>
				<div className={styles.wrapper}>
					<div>
						<div className={styles.heading}>
							<Title className={styles.title}>Физический обмен наличных на крипту</Title>

							<div className={styles.subtitles}>
								<Text size='md'>
									Мы проводим обмен наличных в комфортабельном офисе в Moscow City и выдаем их в
									более чем 40 странах мира.
								</Text>

								<Text size='md'>
									Весь процесс максимально безопасен и конфиденциален и занимает не больше 20 минут.
								</Text>
							</div>
						</div>

						<LinkButton
							href={publicUrl.exchange()}
							className={styles.link_button}
						>
							Детальнее
						</LinkButton>
					</div>

					<div className={styles.image}>
						<Image
							src='/images/creating-an-application.png'
							width={447}
							height={883}
							alt=''
						/>

						<div className={styles.image_elipse}>
							<Image
								src='/images/ellipse.svg'
								width={736}
								height={736}
								alt=''
							/>
						</div>
					</div>
				</div>
			</Container>
		</section>
	)
}
