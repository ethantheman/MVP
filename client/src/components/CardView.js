import React from 'react';
 
 // this is the main view that displays the current card
const CardView = (props) => {
  const style = {
    "position": "relative",
    "width": "600px",
    "height": "400px",
    "background": "blue",
    "fontFamily": "Serif",
    "textAlign": "center",
    "verticalAlign": "middle",
    "display": "table-cell",
    "wordWrap": "break-word",
  }

  var partial;

  if ( props.status === 'q' ) {
    partial = <h2>{props.card.question}</h2>
  } else if ( props.status === 'init' ) {
    partial = <h2>Select a question</h2>
  }
  else {
    partial = <h2>{props.card.answer}</h2>
  }

  return (
    <div style={style} onClick={props.onClick}>
      {partial}
    </div>
  );
}

export default CardView;