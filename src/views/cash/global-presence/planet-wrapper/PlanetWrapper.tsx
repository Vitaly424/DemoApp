'use client'

import { Canvas } from '@react-three/fiber'

import { Planet } from './Planet/Planet'

import styles from './PlanetWrapper.module.scss'

export function PlanetWrapper() {
	return (
		<div className={styles.planet_wrapper}>
			<Canvas camera={{ position: [0, 0, 12] }}>
				<ambientLight intensity={5} />
				<Planet />
			</Canvas>
		</div>
	)
}
