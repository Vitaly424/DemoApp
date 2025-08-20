import { AvailableCurrencies } from './available-currencies/AvailableCurrencies'
import { BusinessTransfers } from './business-transfers/BusinessTransfers'
import { CarInvoiceDeals } from './carInvoice-deals/CarInvoiceDeals'
import { PaymentOptionsList } from './payment-options-list/PaymentOptionsList'

export function SwiftSepa() {
	return (
		<>
			<BusinessTransfers />
			<PaymentOptionsList />
			<AvailableCurrencies />
			<CarInvoiceDeals />
		</>
	)
}
