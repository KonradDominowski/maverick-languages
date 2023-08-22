import Image from 'next/image'

import { IoLogoLinkedin } from 'react-icons/io'

import styles from './Footer.module.scss'

import contactInfo from '@/public/contactInfo'
import logo from '@/public/images/logo.jpeg'
import marker_light from '@/public/icons/marker_light.png'
import mail from '@/public/icons/mail.png'
import telephone from '@/public/icons/telephone.png'

export default function Footer() {
	return <div className={ styles.footerBackground }>
		<div className={ styles.footer } id="contact">

			<div className={ `${styles.footerColumn} ${styles.logoContact}` }>
				<Image src={ logo } alt="" className={ styles.footerLogo }></Image>
				<div>
					<a href="https://goo.gl/maps/LZP2ihcTv4DsGkns6" className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<Image src={ marker_light } alt=""></Image>
						</div>
						<p>
							{ contactInfo.address }
							<br></br>
							<span style={ { fontSize: '0.8rem', color: 'rgb(120,120,120)' } }>{ contactInfo.addressNote }</span>
						</p>
					</a>

					<a href={ `mailto:${contactInfo.email}` } className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<Image src={ mail } alt=""></Image>
						</div>
						{ contactInfo.email }
					</a>

					<a href={ `tel:${contactInfo.phone}` } className={ styles.addressContainer }>
						<div className={ styles.addressIcon }>
							<Image src={ telephone } alt=""></Image>
						</div>
						{ contactInfo.phone }
					</a>

				</div>
			</div>

			<div className={ `${styles.footerColumn} ${styles.footerCourses}` }>
				<h4>Courses</h4>
				<ul className={ styles.footerList }>
					<li><a href="#courses">One to One</a></li>
					<li><a href="#courses">One to Two</a></li>
					<li><a href="#courses">Peer to Peer</a></li>
				</ul>
			</div>

			<div className={ styles.footerColumn }>
				<h4>LINKS</h4>
				<ul className={ styles.footerList }>
					<li><a href="#about">About me</a></li>
					<li><a href="https://www.linkedin.com/in/marta-matuszewska-ceglarek-618583b7/">LinkedIN		<IoLogoLinkedin fontSize={ 18 } style={ { verticalAlign: 'text-top' } } />
					</a></li>
				</ul>
			</div>
		</div>
	</div>
}
