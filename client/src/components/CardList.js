import React from "react";
import CardListEntry from './CardListEntry.js';

const CardList = (props) => {
	return (
			<div>
				<h2>Card List</h2>
				{props.cards.map((card, i) => <CardListEntry key={i} card={card} onClick={props.changeCard}/>)}
			</div>
			);
	}

export default CardList;