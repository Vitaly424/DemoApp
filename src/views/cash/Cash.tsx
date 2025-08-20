import { GlobalPresence } from './global-presence/GlobalPresence'
import { CashNow } from './сash-now/CashNow'
import { CashWithdrawalSteps } from './сash-withdrawal-steps/CashWithdrawalSteps'

export function Cash() {
	return (
		<>
			<CashNow />
			<CashWithdrawalSteps />
			<GlobalPresence />
		</>
	)
}
