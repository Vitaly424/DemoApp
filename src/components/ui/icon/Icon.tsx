'use client'

interface IconProps {
	className?: string
	id: string
}

export const IconSvg = (props: IconProps) => {
	const { className, id } = props

	return (
		<svg className={className}>
			<use xlinkHref={`/images/icons/sprite/icons-sprite.svg#${id}`} />
		</svg>
	)
}
