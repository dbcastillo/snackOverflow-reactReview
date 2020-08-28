import React from 'react'

  const DrinkCards = (props) => {
    let card = props.cards.map( card =>
      <div key={card.id} className="card" style={{width: "30%"}}>
        <img src={card.image} alt='avatar' style={{width: "50%"}}/>
        <div className="container">
        <h1>Name: {card.user}</h1>
        <h2>Drink: {card.beverage}</h2>
        </div>
      </div>
    )





    return(
      <div>
        {card}
      </div>
    )

  }

export default DrinkCards;