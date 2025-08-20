import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { BgCard } from '@/components/ui/bg-card/BgCard'

import styles from './Menu.module.scss'

export function Menu() {
	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles.list_item}>
					<span>О нас</span>

					<BgCard className={styles.dropdown}>
						<Link href={publicUrl.location()}>Адрес офиса</Link>
						<a href='#'>Телеграмм канал</a>
						<a href='#'>Группа ВЭД</a>
					</BgCard>
				</li>

				<li className={styles.list_item}>
					<span>ВЭД</span>

					<BgCard className={styles.dropdown}>
						<Link href={publicUrl.paymentAgent()}>Платежный агент</Link>
					</BgCard>
				</li>

				<li className={styles.list_item}>
					<Link href={publicUrl.swiftsepa()}>Swift & Sepa</Link>
				</li>

				<li className={styles.list_item}>
					<span>Финансы</span>

					<BgCard className={styles.dropdown}>
						<Link href={publicUrl.exchange()}>Обмен валют</Link>
						<Link href={publicUrl.cash()}>Выдача наличных</Link>
					</BgCard>
				</li>
			</ul>
		</nav>
	)
}
