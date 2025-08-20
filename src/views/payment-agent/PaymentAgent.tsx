import { CooperationBenefits } from './cooperation-benefits/CooperationBenefits'
import { HowWeWork } from './how-we-work/HowWeWork'
import { CurrencyPayments } from './сurrency-payments/CurrencyPayments'

export function PaymentAgent() {
	return (
		<>
			<CurrencyPayments />
			<HowWeWork />
			<CooperationBenefits />
		</>
	)
}
