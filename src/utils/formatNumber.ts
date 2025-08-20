export const formatNumber = (value: string): string => {
	const cleaned = value.replace(/[^0-9.,]/g, '').replace(',', '.')

	const number = parseFloat(cleaned)
	if (isNaN(number)) return ''

	return new Intl.NumberFormat('ru-RU', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	})
		.format(number)
		.replace(',', '.')
}
