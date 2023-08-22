'use client'

import styles from './Header.module.scss'

import logo from '@/public/images/logo.jpeg'
import Image from 'next/image'

export default function Header() {

	const scrollToSection = e => {
		e.preventDefault()
		const scrollTarget = e.target.dataset.to

		if (!scrollTarget) return

		document.querySelector(`#${scrollTarget}`).scrollIntoView({ behavior: 'smooth' })
	}

	return <header>
		<div className={ styles.navDiv }>
			<nav className={ styles.nav }>
				<div className={ styles.navLogo }>
					<a href="/">
						<Image
							className={ styles.navLogoImg }
							src={ logo }
							width={ 100 }
							height={ 100 }
							alt='Maverick Language Studio Logo' ></Image>
					</a>
				</div>
				<div className={ styles.navLinks } onClick={ scrollToSection }>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="courses">Courses</button>
					</div>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="about">About me</button>
					</div>
					<div className={ styles.navLink }>
						<button className={ styles.navLink } data-to="contact">Contact</button>
					</div>
				</div>
			</nav>
		</div >
	</header >
}
