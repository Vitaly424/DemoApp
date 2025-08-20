import cn from 'clsx'
import type { ReactNode } from 'react'

import styles from './BgCard.module.scss'

type BgCardSize = 'sm' | 'md'
type BgCardVariant = 'white' | 'blue' | 'dark'

interface BgCardSizeProps {
	className?: string
	children: ReactNode
	size?: BgCardSize
	variant?: BgCardVariant
	ref?: React.Ref<HTMLDivElement> | null
}

export function BgCard(props: BgCardSizeProps) {
	const { children, size = 'md', className, variant = 'white', ref } = props

	return (
		<div
			ref={ref}
			className={cn(styles.bg_card, className, styles[size], styles[variant])}
		>
			{children}
		</div>
	)
}
