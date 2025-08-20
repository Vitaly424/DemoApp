'use client'

import { AccordionItem, Accordion as SzAccordion } from '@szhsin/react-accordion'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { LinkButton } from '@/components/ui/link-button/LinkButton'

import styles from './MenuMobile.module.scss'

interface MenuMobileProps {
	isMenuMobile: boolean
}

export function MenuMobile(props: MenuMobileProps) {
	const { isMenuMobile } = props

	return (
		<div
			className={cn(styles.wrapper, {
				[styles.active_menu]: isMenuMobile
			})}
		>
			<SzAccordion
				transition
				transitionTimeout={500}
			>
				<AccordionItem
					header={({ state: { isEnter } }) => (
						<div
							className={cn(styles.item_header, {
								[styles.active]: isEnter
							})}
						>
							О наc
							<Image
								src='/images/icons/arrow-menu.svg'
								width={20}
								height={10}
								alt=''
							/>
						</div>
					)}
					className={styles.item}
					contentProps={{ className: styles.content }}
					buttonProps={{ className: styles.button }}
					panelProps={{ className: styles.panel }}
				>
					<div className={styles.menu_items}>
						<Link href={publicUrl.location()}>Адрес офиса</Link>
						<a href='#'>Телеграмм канал</a>
						<a href='#'>Группа ВЭД</a>
					</div>
				</AccordionItem>

				<AccordionItem
					header={({ state: { isEnter } }) => (
						<div
							className={cn(styles.item_header, {
								[styles.active]: isEnter
							})}
						>
							ВЭД
							<Image
								src='/images/icons/arrow-menu.svg'
								width={20}
								height={10}
								alt=''
							/>
						</div>
					)}
					className={styles.item}
					contentProps={{ className: styles.content }}
					buttonProps={{ className: styles.button }}
					panelProps={{ className: styles.panel }}
				>
					<div className={styles.menu_items}>
						<Link href={publicUrl.paymentAgent()}>Платежный агент</Link>
					</div>
				</AccordionItem>

				<AccordionItem
					header={({ state: { isEnter } }) => (
						<div
							className={cn(styles.item_header, {
								[styles.active]: isEnter
							})}
						>
							Онлайн платежи
							<Image
								src='/images/icons/arrow-menu.svg'
								width={20}
								height={10}
								alt=''
							/>
						</div>
					)}
					className={styles.item}
					contentProps={{ className: styles.content }}
					buttonProps={{ className: styles.button }}
					panelProps={{ className: styles.panel }}
				>
					<div className={styles.menu_items}>
						<Link href={publicUrl.swiftsepa()}>Swift & Sepa</Link>
					</div>
				</AccordionItem>

				<AccordionItem
					header={({ state: { isEnter } }) => (
						<div
							className={cn(styles.item_header, {
								[styles.active]: isEnter
							})}
						>
							Финансы
							<Image
								src='/images/icons/arrow-menu.svg'
								width={20}
								height={10}
								alt=''
							/>
						</div>
					)}
					className={styles.item}
					contentProps={{ className: styles.content }}
					buttonProps={{ className: styles.button }}
					panelProps={{ className: styles.panel }}
				>
					<div className={styles.menu_items}>
						<Link href={publicUrl.exchange()}>Обмен валют</Link>
						<Link href={publicUrl.cash()}>Выдача наличных</Link>
					</div>
				</AccordionItem>
			</SzAccordion>

			<div className={styles.footer}>
				<LinkButton className={styles.link_button}>Создать заявку</LinkButton>
				<div className={styles.policy}>
					<Link href={publicUrl.kysAmlPolicy()}>KYC/AML политика</Link>
				</div>
			</div>
		</div>
	)
}
