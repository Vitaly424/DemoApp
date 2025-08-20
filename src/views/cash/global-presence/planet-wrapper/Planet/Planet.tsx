'use client'

import { Sphere, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Mesh } from 'three'

export function Planet() {
	const planetRef = useRef<Mesh>(null!)
	const [colorMap] = useTexture(['/images/texture-planet/earth_daymap.jpg'])

	useFrame(() => {
		if (planetRef.current) {
			planetRef.current.rotation.y += 0.003
		}
	})

	return (
		<>
			<Sphere
				ref={planetRef}
				args={[7, 80, 80]}
			>
				<meshStandardMaterial map={colorMap} />
			</Sphere>
		</>
	)
}
