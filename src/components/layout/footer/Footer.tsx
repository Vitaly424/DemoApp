import cn from 'clsx'
import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { BgCard } from '@/components/ui/bg-card/BgCard'
import { Container } from '@/components/ui/container/Container'
import { Title } from '@/components/ui/title/Title'

import styles from './Footer.module.scss'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<Container className={styles.container}>
				<BgCard className={styles.bg_card}>
					<div className={styles.wrapper}>
						<div className={styles.top_menu}>
							<div className={styles.group}>
								<Title
									className={styles.title}
									size='sm'
								>
									О нас
								</Title>

								<ul className={styles.list}>
									<li>
										<Link href={publicUrl.location()}>Адрес офиса</Link>
									</li>
									<li>
										<a href='#'>Телеграм канал</a>
									</li>
									<li>
										<a href='#'>Группа ВЭД</a>
									</li>
								</ul>
							</div>

							<div className={styles.group}>
								<Title
									className={styles.title}
									size='sm'
								>
									Финансы
								</Title>

								<ul className={styles.list}>
									<li>
										<Link href={publicUrl.exchange()}>Обмен валюты</Link>
									</li>

									<li>
										<Link href={publicUrl.cash()}>Выдача наличных</Link>
									</li>
								</ul>
							</div>

							<div className={cn(styles.group)}>
								<Title
									className={styles.title}
									size='sm'
								>
									Соц сети
								</Title>

								<ul className={styles.list}>
									<li>
										<a href='#'>Группа ВЭД</a>
									</li>
									<li>
										<a href='#'>Telegram канал</a>
									</li>
								</ul>
							</div>

							<div className={styles.group}>
								<Title
									className={styles.title}
									size='sm'
								>
									ВЭД
								</Title>

								<ul className={styles.list}>
									<li>
										<Link href={publicUrl.paymentAgent()}>Платежный агент</Link>
									</li>
								</ul>
							</div>

							<div className={styles.group}>
								<Title
									className={styles.title}
									size='sm'
								>
									Онлайн платежи
								</Title>

								<ul className={styles.list}>
									<li>
										<Link href={publicUrl.swiftsepa()}>Swift & Sepa</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className={styles.copyright}>
						<Link
							className={styles.logo}
							href={publicUrl.home()}
						>
							Demo
						</Link>

						<p>Copyright © 2025 Demo. Все права защищены.</p>
					</div>
				</BgCard>
			</Container>
		</footer>
	)
}
