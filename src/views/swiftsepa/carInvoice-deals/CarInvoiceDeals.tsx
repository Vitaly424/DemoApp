import Image from 'next/image'

import { Container } from '@/components/ui/container/Container'
import { Text } from '@/components/ui/subtitle/Text'
import { Title } from '@/components/ui/title/Title'

import { CarInvoiceDealsList } from './CarInvoiceDealsList/CarInvoiceDealsList'

import styles from './CarInvoiceDeals.module.scss'

export function CarInvoiceDeals() {
	return (
		<section>
			<Container>
				<div className={styles.heading}>
					<Title
						className={styles.title}
						position='center'
					>
						Выгодные условия для оплаты инвойсов от автосалонов и аукционов
					</Title>

					<Text
						position='center'
						size='md'
						className={styles.text}
					>
						Demo предоставляет своим клиентам возможность оплачивать инвойсы по множеству позиций,
						во всех популярных мировых валютах
					</Text>
				</div>

				<div className={styles.image_decor_car}>
					<Image
						src='/images/decor/decor-6.png'
						width={500}
						height={500}
						alt=''
					/>
				</div>

				<CarInvoiceDealsList />
			</Container>
		</section>
	)
}
