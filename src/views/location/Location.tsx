import { Essentials } from './essentials/Essentials'
import { LocationAndDirections } from './location-and-directions/LocationAndDirections'
import { Offices } from './offices/Offices'

export function Location() {
	return (
		<>
			<LocationAndDirections />
			<Offices />
			<Essentials />
		</>
	)
}
