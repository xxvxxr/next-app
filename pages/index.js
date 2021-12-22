import { Fragment } from 'react'
import styled from 'styled-components'
import Card from './components.js/Card'
// import { GetCards } from './components.js/GetCards'
import  {GetDeck}  from './GetDeck'
import GetFirstFive from './GetFirstFive'

const Cement = styled.div`
	height: 100vh;
	width: 100vw;
	position: relative;
	display: flex;
	/* justify-content: center; */
	flex-wrap: wrap;
	/* z-index: 1; */
	/* max-width: 1200px; */
`
const LeftSide = styled.div`
	background: linear-gradient(
		90deg,
		rgba(133, 139, 222, 1) 0%,
		rgba(148, 148, 247, 1) 48%,
		rgba(133, 139, 222, 1) 100%
	);
	position: relative;
	/* z-index: 1; */
	width: 50vw;
	height: 100vh;
`

const RIghtSide = styled.div`
	width: 50vw;
	height: 100vh;
`

const Title = styled.h1`
	display: flex;
	font-size: 8rem;
`

function index() {
	return (
		<Fragment>
			<GetDeck>
				<Cement>
					<LeftSide>
						<Card />
						<Title>XXVXXR</Title>
					</LeftSide>
					<RIghtSide>
						<GetFirstFive />
					</RIghtSide>
					{/* <GetDeck /> */}
				</Cement>
			</GetDeck>
		</Fragment>
	)
}

export default index
