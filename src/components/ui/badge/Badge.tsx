import cn from 'clsx'
import type { ReactNode } from 'react'

import styles from './Badge.module.scss'

type BadgeSize = 'sm' | 'md' | 'lg'

interface BadgeProps {
	children?: ReactNode
	size?: BadgeSize
	className?: string
}

export function Badge(props: BadgeProps) {
	const { children, size = 'md', className } = props

	return <div className={cn(styles.badge, styles[size], className)}>{children}</div>
}
