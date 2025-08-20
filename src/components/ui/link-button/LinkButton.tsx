import cn from 'clsx'
import Image from 'next/image'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

import styles from './LinkButton.module.scss'

type LinkButtonVariant = 'dark' | 'blue'
type LinkButtonSize = 'sm' | 'md' | 'lg'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	children: ReactNode
	variant?: LinkButtonVariant
	size?: LinkButtonSize
	className?: string
	href?: string
}

export function LinkButton(props: LinkButtonProps) {
	const { children, variant = 'blue', size = 'lg', className, href = '#', ...otherProps } = props

	return (
		<a
			className={cn(styles.link, className, styles[variant], styles[size])}
			href={href}
			{...otherProps}
		>
			<span>{children}</span>

			<Image
				src='/images/icons/arrow.svg'
				alt='arrow'
				width={13}
				height={13}
			/>
		</a>
	)
}
