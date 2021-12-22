import styled from 'styled-components'
import Tilt from 'react-vanilla-tilt'
// import  { Cards } from '../GetDeck'
import Image from 'next/image'
import { Fragment } from 'react/cjs/react.production.min'

const Cement = styled.div`
	position: relative;
	box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
	border-radius: 15px;
	background: rgba(255, 255, 255, 0.1);
	overflow: hidden;
	display: flex;
	justify-content: center;
	width: inherit;
	height: inherit;
	justify-content: center;
	align-items: center;
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.5);
	backdrop-filter: blur(100px);
`

const Content = styled.div`
	position: absolute;
	display: flex;
	top: -10px;
	padding: 20px;
	/* text-align: center; */
	transform: translateY(100px);
	opacity: 0;
	transition: 0.5s;

	:hover {
		transform: translateY(100px);
		opacity: 1;
	}
`
const Header = styled.h1`
	/* position: absolute; */
	/* top: 10px; */
	right: 30px;
	font-size: 1rem;
	z-index: 1;
`
const Subtitle = styled.h3`
	font-size: 1.8rem;
	color: black;
	font-weight: 300;
`
const Paragraph = styled.p`
	font-size: 1em;
	color: #fff;
	font-weight: 300;
`

function Card(props) {
	// const { deck } = GetDeckID()

	// console.log(deck.cards)

	return (
		<Fragment>
			<Tilt
				options={{ speed: 600, glare: true, 'max-glare': 2 }}
				style={{
					background: 'none',
					width: '30vw',
					height: '50vh',
					zIndex: 1,
					position: 'relative',
					left: '20px',
					top: '20vh',
					backdropFilter: 'blur(100px)',
					borderRadius: '15px',
				}}
			>
				<Cement>
					{/* <Subtitle> {deck.remaining}</Subtitle> */}
					<Header> Cards Remaining </Header>
					<Content>
						<Paragraph></Paragraph>
					</Content>
				</Cement>
			</Tilt>
			{/* <Cards></Cards> */}
		</Fragment>
	)
}

export default Card
