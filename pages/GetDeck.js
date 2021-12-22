import React, { useEffect, useState } from 'react'
import axios from 'axios'
// import { render } from 'react-dom'
import styled from 'styled-components'
import Image from 'next/image'

const Cards = styled.div`
	height: 100px;
	background-color: blueviolet;
`
const IMAGE = styled(Image)`
	position: 'sticky';
	display: grid;
	grid: 1/1/1/1;
	top: 10px;
	transform-origin: center top;
`
const userContext = React.createContext()

const  GetDeck = (props) => {
	const [deck, setDeck] = useState({ id: '', remaining: 0, cards: [] })

	useEffect(() => {
		const getNewDeckOfCards = async () => {
			try {
				await axios
					.get('http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
					.then((res) => {
						axios
							.get(
								`http://deckofcardsapi.com/api/deck/${res.data.deck_id}/draw/?count=52`
							)
							.then((result) =>
								setDeck({
									id: res.data.deck_id,
									remaining: res.data.remaining,
									cards: result.data.cards,
								})
							)
					})
			} catch (error) {
				console.error(error)
			}
		}
		getNewDeckOfCards()

		// the number of cards will need to be tracked
		//  if the player runs out of cards they loose but have the option to restart
		// they would then need to be able to select cards that they would discard
		// and those cards would need to be added to a pile
	}, [])
	console.log(deck)

	return (
		<userContext.Provider value={{deck}}>{props.children}</userContext.Provider>

		// <Cards deck={deck}>
		// 	{deck.cards.map((card) => (
		// 		<IMAGE
		// 			src={card.image}
		// 			key={card.code}
		// 			alt="cardFace"
		// 			width="100px"
		// 			height="100px"
		// 		></IMAGE>
		// 	))}
		// </Cards>
	)
}

export { GetDeck, userContext }
