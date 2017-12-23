import React from "react";

const CardListEntry = (props) => {
	const style = {
		"width": "75%",
		"height": "100px",
		"overflow": "hidden"
	}
	return (
		<div>
		<div style = {style}>
			<div onClick={props.onClick.bind(this, props.card)}>
				<h4>{props.card.question}</h4>
			</div>
		</div>
			<button onClick={props.deleteCard.bind(this, props.card)}>delete card</button>
		</div>
		);

}

export default CardListEntry;