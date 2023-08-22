import oneToOne2 from './images/oneToOne2.jpg'
import oneToTwo from './images/oneToTwo.jpeg'
import peerToPeer from './images/peerToPeer.jpeg'

const courses = [
	{
		title: 'One To One',
		description: 'Students will have their individual level assessed followed by classes customised to fit their specific requirements.',
		more: 'Classes may be arranged according to student’s individual schedule. Meetings can be shorter that 45 mins, but more frequent, for example. Each lesson is based on the chosen subject and presentation shared with the student during the meeting.',
		img: {
			src: oneToOne2,
			alt: 'Teacher teaching a student'
		}
	},
	{
		title: 'One To Two',
		description: 'Two students with no other than English language (preferably) in common - set in pairs, attend a tailor-made course with the teacher who equips them with the necessary tools to improve their communication in English.',
		more: 'Online tution in 2TO1 as well as in group meetings, is based on the power point presentation provided by the teacher with the set of tasks to engage students in a conversation. Adequate coursebooks are sugested if necessary.',
		img: {
			src: oneToTwo,
			alt: 'Teacher teaching two students',
		}
	},
	{
		title: 'Peer To Peer',
		description: `Peer-to-peer teaching: natives to different languages can teach each other their mother tongue in a
		specifically designed course with the tutor's help. Such course is prepared individually to fit the student's
		needs.`,
		more: 'The formula of this course assumes the will for learning different languages. Sometimes it is possible to turn 2 TO 1 into peer-to-peer, or mix them. All this with the assistance of the tutor who is qualified in both languages involved.',
		img: {
			src: peerToPeer,
			alt: 'Friends learning together'
		}
	},
]

export default courses