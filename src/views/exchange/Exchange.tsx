import { FastCashout } from './fast-cashout/FastCashout'
import { CryptoExchangePromo } from './сrypto-exchange-promo/CryptoExchangePromo'
import { CurrentExchangeRate } from './сurrent-exchange-rate/CurrentExchangeRate'

export function Exchange() {
	return (
		<>
			<CryptoExchangePromo />
			<CurrentExchangeRate />
			<FastCashout />
		</>
	)
}
