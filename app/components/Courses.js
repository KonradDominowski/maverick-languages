import Image from 'next/image'
import styles from './Courses.module.scss'

import courses from '@/public/coursesInfo'

import blindMan from '@/public/images/blindMan.jpeg'
import Course from './Course'


export default function Courses() {
	return <>
		<section id="courses">
			<div className={ styles.courses }>
				<div className={ styles.coursesHeader }>
					<h1>My Courses</h1>
					<p>
						In 2023/24 I will be running <b>3 types</b> of online courses:
						<ul>
							<li>One-to-one English Tutoring</li>
							<li>One-to-Two English Online</li>
							<li>Peer-to-Peer Teaching</li>
						</ul>

						There is also the possibility of running courses with closed groups upon request.
					</p>
				</div>
				<div className={ styles.coursesPhoto }>
					<Image src={ blindMan } alt=""></Image>
				</div>
			</div>
		</section>

		<section>
			<div className={ styles.sessions }>
				{ courses.map(course => <Course course={ course } />) }
			</div>
		</section>
	</>
}
