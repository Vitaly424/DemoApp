'use client'

import { AccordionItem, Accordion as SzAccordion } from '@szhsin/react-accordion'
import cn from 'clsx'
import { useEffect, useState } from 'react'

import { IconSvg } from '../icon/Icon'
import { Text } from '../subtitle/Text'
import { Title } from '../title/Title'

import styles from './Accordion.module.scss'

export function Accordion() {
	const [isDesktop, setIsDesktop] = useState(true)

	useEffect(() => {
		const checkViewport = () => {
			setIsDesktop(window.innerWidth >= 767)
		}

		checkViewport()
		window.addEventListener('resize', checkViewport)
		return () => window.removeEventListener('resize', checkViewport)
	}, [])

	return (
		<SzAccordion
			transition
			transitionTimeout={500}
			className={styles.accordion}
		>
			<AccordionItem
				initialEntered={isDesktop}
				header={({ state: { isEnter } }) => (
					<>
						<div className={styles.item_header}>
							<Title
								className={styles.title}
								size='md'
							>
								Введение в ВЭД
								<IconSvg
									className={cn(styles.icon, {
										[styles.icon_active]: !isEnter
									})}
									id={'quotation-marks'}
								/>
							</Title>
						</div>
					</>
				)}
				className={styles.item}
				contentProps={{ className: styles.content }}
				buttonProps={{ className: styles.button }}
				panelProps={{ className: styles.panel }}
			>
				<Text>
					Внешнеэкономическая деятельность (ВЭД) открывает для российского бизнеса широкие
					возможности сотрудничества с зарубежными партнёрами и увеличения прибыли за счёт экспорта
					и импорта. Правильная организация ВЭД позволяет выгодно использовать международные
					торговые инструменты, привлекать новые рынки сбыта и настраивать эффективные цепочки
					поставок. Однако при выходе на мировой рынок крайне важно соблюдать требования валютного
					контроля, грамотно оформлять контракты и своевременно производить расчёты с иностранными
					контрагентами. Компания Demo специализируется на сопровождении ВЭД: мы выступаем платёжным
					агентом при оплате инвойсов на крупные суммы и обеспечиваем юридическую чистоту возврата
					валютной выручки. Наши эксперты берут на себя все этапы — от анализа условий
					внешнеэкономического договора до полной финансовой отчётности. Такой комплексный подход не
					только снижает риски штрафных санкций и блокировок, но и даёт вашему бизнесу конкурентные
					преимущества при работе в глобальном масштабе.
				</Text>
			</AccordionItem>
		</SzAccordion>
	)
}
