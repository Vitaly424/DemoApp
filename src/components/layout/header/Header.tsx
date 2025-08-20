'use client'

import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import { publicUrl } from '@/app/config/routes/page-routes/public'

import { LinkButton } from '@/components/ui/link-button/LinkButton'

import { Container } from '../../ui/container/Container'
import { MenuMobile } from '../menu-mobile/MenuMobile'
import { Menu } from '../menu/Menu'

import { useScrollDirection } from './useScrollDirection'

import styles from './Header.module.scss'

export function Header() {
	const [isMenuMobile, setIsMenuMobile] = useState(false)
	const isScrollingDown = useScrollDirection()
	const pathname = usePathname()

	useEffect(() => {
		if (isMenuMobile) {
			document.documentElement.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = ''
		}

		return () => {
			document.documentElement.style.overflow = ''
		}
	}, [isMenuMobile])

	useEffect(() => {
		setIsMenuMobile(false)
	}, [pathname])

	return (
		<header
			className={cn(styles.header, {
				[styles.header_scrolled]: isScrollingDown
			})}
		>
			<Container>
				<div className={styles.wrapper}>
					<Link
						className={styles.logo}
						href={publicUrl.home()}
					>
						Demo
					</Link>

					<Menu />

					<div className={styles.link_button}>
						<LinkButton
							variant='dark'
							size='sm'
						>
							Создать заявку
						</LinkButton>
					</div>

					{isMenuMobile ? (
						<button
							onClick={() => setIsMenuMobile(false)}
							className={styles.burger_button}
							type='button'
						>
							<Image
								src='/images/icons/show-menu-burger.svg'
								width={27}
								height={14}
								alt='Меню'
							/>
						</button>
					) : (
						<button
							onClick={() => setIsMenuMobile(true)}
							className={styles.burger_button}
							type='button'
						>
							<Image
								src='/images/icons/burger.svg'
								width={27}
								height={14}
								alt='Меню'
							/>
						</button>
					)}
				</div>
			</Container>

			<MenuMobile isMenuMobile={isMenuMobile} />
		</header>
	)
}
