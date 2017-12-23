import React from "react";
import CardListEntry from './CardListEntry.js';

const CardList = (props) => {
	const style={
		"border": "1px solid black",
		"height": "400px",
		"marginLeft": "5%",
		"marginRight": "5%",
		"overflow": "scroll"
	}
	return (
			<div style={style}>
				<h2 style={{"textAlign":"center"}}>Your Cards</h2>
				{props.cards.map((card, i) => <CardListEntry key={i} card={card} onClick={props.changeCard} deleteCard={props.deleteCard}/>)}
			</div>
			);
	}

export default CardList;