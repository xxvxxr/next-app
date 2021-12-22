// import { deck }  from "./GetDeck"
import { axios } from 'axios'
import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { userContext } from './GetDeck'

const GetFirstFive = () => {

	const [showCards, setShowCards] = useState(true)
	const [five, setFive] = useState([])
	const { deck } = useContext(userContext)

	let fiveCards = deck?.cards.slice(0, 5)

	const handleClick = (e) => {
		e.preventDefault()
		setFive(fiveCards)
		setShowCards(!showCards)
        console.log(deck)
		// in this area is where i need to grab the first five cards from deck
		// have them display to the screen
		// and make it to where the aren't able to be used again until the deck gets shuffled
	}
    const changeCard = (e) => {
        e.preventDefault()
        // console.log(five)
        console.log( five)
        axios.get(`http://deckofcardsapi.com/api/deck/${deck.id}/draw/?count=1`)
        .then(res => console.log(res))
        .catch(err=> console.log(err))
        // console.log(currentPic)
    }

	return (
		<div>
			{showCards ? (
				<button onClick={handleClick}>press here</button>
			) : (
				<>
					{five.map((fifth) => (
						<>
							<Image
								src={fifth?.image}
								key={fifth.code}
								alt="cardFace"
								width="100px"
								height="100px"
							></Image>
                            <button id={fifth.code} onClick={changeCard}> change me </button>
						</>
					))}
				</>
			)}
		</div>
	)
}

export default GetFirstFive
