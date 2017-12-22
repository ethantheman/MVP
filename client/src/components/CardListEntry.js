import React from "react";

const CardListEntry = (props) => {
	return (
		<div onClick={props.onClick.bind(this, props.card)}>
			<h4>{props.card.question}</h4>
		</div>
		);

}

export default CardListEntry;