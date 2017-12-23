import React from 'react';
 
 // this is the main view that displays the current card
const CardView = (props) => {
  const style = {
    "position": "absolute",
    "width": "50%",
    "height": "50%",
    "left": "30%",
    "top": "50%",
    "background": "blue",
    "fontFamily": "Serif"
  }

  var partial;

  if ( props.status === 'q' ) {
    partial = <h2>Question: {props.card.question}</h2>
  } else if ( props.status === 'init' ) {
    partial = <h2>Select a question</h2>
  }
  else {
    partial = <h2>Answer: {props.card.answer}</h2>
  }

  return (
    <div style = {style} onClick={props.onClick}>
      {partial}
    </div>
  );
}

export default CardView;