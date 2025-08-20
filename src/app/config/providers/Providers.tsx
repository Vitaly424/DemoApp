'use client'

import NextTopLoader from 'nextjs-toploader'
import { type FC, type PropsWithChildren } from 'react'

export const Providers: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return (
		<>
			{children}
			<NextTopLoader showSpinner={false} />
		</>
	)
}
