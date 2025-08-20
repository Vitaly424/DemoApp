import cn from 'clsx'

import styles from './Text.module.scss'

type TextPosition = 'left' | 'center' | 'right'
type TextSize = 'sm' | 'md'
type TextVariant = 'gray' | 'dark'

interface TextProps extends React.HTMLAttributes<HTMLElement> {
	className?: string
	children: React.ReactNode
	position?: TextPosition
	size?: TextSize
	variant?: TextVariant
}

export function Text(props: TextProps) {
	const {
		children,
		position = 'left',
		size = 'sm',
		variant = 'gray',
		className,
		...otherProps
	} = props

	return (
		<p
			className={cn(styles.text, styles[position], styles[size], styles[variant], className)}
			{...otherProps}
		>
			{children}
		</p>
	)
}
