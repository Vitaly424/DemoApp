import cn from 'clsx'
import type { ElementType, ReactNode } from 'react'

import styles from './Title.module.scss'

type TitlePosition = 'left' | 'center' | 'right'
type TitleSize = 'sm' | 'md' | 'md_2' | 'lg'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	children: ReactNode
	className?: string
	position?: TitlePosition
	typeTag?: 'h1' | 'h2' | 'h3' | 'h4'
	size?: TitleSize
}

export function Title(props: TitleProps) {
	const {
		className,
		typeTag = 'h2',
		size = 'lg',
		children,
		position = 'left',
		...otherProps
	} = props

	const HeaderTag: ElementType = typeTag

	return (
		<HeaderTag
			className={cn(styles.title, styles[size], styles[position], className)}
			{...otherProps}
		>
			{children}
		</HeaderTag>
	)
}
