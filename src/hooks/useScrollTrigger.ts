import { useEffect, useRef, useState } from 'react'

export function useScrollTrigger(threshold = 0.5) {
	const sectionRef = useRef<HTMLElement | null>(null)
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsActive(!entry.isIntersecting)
			},
			{ threshold }
		)

		const current = sectionRef.current
		if (current) observer.observe(current)

		return () => {
			if (current) observer.unobserve(current)
		}
	}, [threshold])

	return { sectionRef, isActive }
}
