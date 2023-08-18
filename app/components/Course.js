'use client'

import { useState } from 'react'
import Image from 'next/image'

import contactInfo from '@/public/contactInfo'
import styles from './Course.module.scss'

export default function Course({ course }) {
	const [showCourseDescription, setShowCourseDescription] = useState(false)

	const sessionDescriptionClasses = `${styles.sessionDescription} ${(showCourseDescription) ? styles.show : styles.hide}`

	return <div
		className={ styles.session }
		onMouseEnter={ () => setShowCourseDescription(state => !state) }
		onMouseLeave={ () => setShowCourseDescription(state => !state) }
	>
		<Image src={ course.img.src } alt={ course.img.alt } className={ styles.sessionImg }></Image>
		<p className={ styles.sessionTitle }>{ course.title }</p>
		<div className={ sessionDescriptionClasses }>
			<div className={ styles.description }>
				<div className={ styles.sessionTitleDiv }>
					<p className={ styles.sessionTitle }>{ course.title }</p>
				</div>
				<p>{ course.description }</p>
				<p>{ course.more }</p>
			</div>
			<div className={ styles.sessionLinkContainer }>
				<a href={ `mailto:${contactInfo.email}?subject=${course.title} Inquiry` } className={ styles.sessionLink }>Learn more...</a>
			</div>
		</div>
	</div >
}
