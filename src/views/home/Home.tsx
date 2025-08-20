import { CashToCrypto } from './cash-to-crypto/CashToCrypto'
import { FastPayments } from './fast-payments/FastPayments'
import { GlobalСash } from './global-cash/GlobalСash'
import { GlobalTransfers } from './global-transfers/GlobalTransfers'
import { ReliablePayments } from './reliable-payments/ReliablePayments'
import { SocialAndNews } from './social-and-news/SocialAndNews'

export function Home() {
	return (
		<>
			<FastPayments />
			<ReliablePayments />
			<GlobalTransfers />
			<GlobalСash />
			<CashToCrypto />
			{/* <PrivateZone /> */}
			<SocialAndNews />
		</>
	)
}
