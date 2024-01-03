'use client'

import styles from './Hero.module.scss'

import poster from '@/public/images/poster.jpg'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Hero() {
	const firstLine = useRef()
	const secondLine = useRef()

	const scrollPastHeroSection = () => {
		document.querySelector('#courses').scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	useEffect(() => {
		firstLine.current.style.opacity = 0
		secondLine.current.style.opacity = 0


		setTimeout(() => {
			firstLine.current.style.transition = '1s ease-in'
			firstLine.current.style.opacity = 1
		}, 500)

		setTimeout(() => {
			secondLine.current.style.transition = '1s ease-in'
			secondLine.current.style.opacity = 1
		}, 1500)

	}, [])

	return (<>
		<div class={ styles.hero }>
			<video autoPlay muted loop className={ styles.video } poster='https://i.imgur.com/6XAoIIb.jpeg'
				src='/video/warsaw720p.mp4'></video>
			<div>
				<h1>
					<span class={ styles.firstLine } ref={ firstLine } >Hands-on-learning online <br></br></span>
					<span class={ styles.secondLine } ref={ secondLine } >make it real and comfy</span>
				</h1>
			</div>
			<div class={ styles.heroLearnMore }>
				<button class={ styles.heroScroll } onClick={ scrollPastHeroSection }>Learn more <span>↓</span></button>
			</div>
		</div>
	</>)
}
