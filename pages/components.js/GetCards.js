import React from 'react'
import GetDeck from '../GetDeck'
// import GetFirstFive from '../GetFirstFive'

export const GetCards = (props) => {
    // const {deck} = GetDeck
	const handleClick = () => {
        console.log(props)
		// console.log(`things`)
        // const test = Object.entries(deck?.cards)
        // console.log(test, `this is test`)

	}

	return <button onClick={handleClick}>Get Cards</button>
}
