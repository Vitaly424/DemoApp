'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { PlanetWrapper } from '../planet-wrapper/PlanetWrapper'

import { countriesData } from './countries.data'
import type { CountriesItem } from './countries.types'

import styles from './GlobalPresenceInfo.module.scss'

const COUNTRY_COUNT = 8
const INTERVAL_MS = 3000

export function GlobalPresenceInfo() {
	const [visibleCountries, setVisibleCountries] = useState<CountriesItem[]>([])
	const [isVisible, setIsVisible] = useState(true)

	const intervalRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const runCycle = () => {
			setIsVisible(false)
			setTimeout(() => {
				setVisibleCountries(getRandomCountries(COUNTRY_COUNT))
				setIsVisible(true)
			}, 400)
		}

		setVisibleCountries(getRandomCountries(COUNTRY_COUNT))
		runCycle()
		intervalRef.current = setInterval(runCycle, INTERVAL_MS)

		const handleVisibilityChange = () => {
			if (document.visibilityState === 'visible') {
				if (intervalRef.current) clearInterval(intervalRef.current)
				runCycle()
				intervalRef.current = setInterval(runCycle, INTERVAL_MS)
			}
		}

		document.addEventListener('visibilitychange', handleVisibilityChange)

		return () => {
			if (intervalRef.current) clearInterval(intervalRef.current)
			document.removeEventListener('visibilitychange', handleVisibilityChange)
		}
	}, [])

	function getRandomCountries(count: number) {
		const shuffled = [...countriesData].sort(() => 0.5 - Math.random())
		return shuffled.slice(0, count)
	}

	return (
		<div className={styles.info}>
			<PlanetWrapper />

			<div className={styles.shadow_image}>
				<Image
					src='/images/shadow.png'
					alt=''
					width={1053}
					height={768}
				/>
			</div>

			<div className={styles.countries}>
				<AnimatePresence>
					{isVisible &&
						visibleCountries.map(country => (
							<motion.div
								key={country.name}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ duration: 0.3 }}
								className={styles.country_card}
							>
								<div className={styles.country_image}>
									<Image
										src={country.flag}
										alt={country.name}
										width={24}
										height={16}
									/>
								</div>
								{country.name}
							</motion.div>
						))}
				</AnimatePresence>
			</div>
		</div>
	)
}
