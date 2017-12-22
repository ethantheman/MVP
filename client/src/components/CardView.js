import React from 'react';
 
 // this is the main view that displays the current card
const CardView = (props) => {
    return (
      <div>
        <h1> CardView </h1>
        <h2> Question: {props.card.question} </h2>
        <h3> Answer: {props.card.answer} </h3>
      </div>
    );
}

export default CardView;