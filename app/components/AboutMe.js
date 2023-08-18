import styles from './AboutMe.module.scss'
import propo_n1 from '@/public/images/propo_n1.jpg'
import propo_n2 from '@/public/images/propo_n2.jpg'
import Image from 'next/image'

export default function AboutMe() {

	return <section className={ styles.about } id="about">
		<div>
			<div>
				<h1 className={ styles.coursesTitle }>
					About me
				</h1>
			</div>
			<div className={ styles.aboutMeDesc }>
				<div >
					<p>
						I am a CELTA - qualified British English teacher with over twenty years of teaching experience, being
						effectively combined with professional practice in international projects coordination.
					</p>
					<p>
						I specialise in bespoke English language lessons to adult and young adult students. The tailored-made
						tuition helps them develop their overall comprehension and boost their confidence when communicating
						in English.
					</p>
				</div>
				<div>
					<Image src={ propo_n1 } alt=""></Image>
				</div>
			</div>
		</div>
	</section >
}
