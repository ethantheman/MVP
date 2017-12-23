import React from "react";

const CardListEntry = (props) => {
	const style = {
		"width": "80%",
		"height": "100px",
		"overflow": "hidden",
		"border": "1px solid black",
		"marginBottom": "2px",
		"marginLeft": '5%',
		"marginRight": '5%',
		"textAlign": "center",
		"verticalAlign": "middle"
	}
	const buttonStyle = {
		"width": "25px",
		"height": "25px",
		"marginBottom": "2px",
		"marginLeft": '5%',
		"marginRight": '5%'
	}
	return (
		<div>
			<button style={buttonStyle} onClick={props.deleteCard.bind(this, props.card)}>x</button>
			<div style = {style} onClick={props.onClick.bind(this, props.card)}>
				<div>
					<h4>{props.card.question}</h4>
				</div>
			</div>
		</div>
		);

}

export default CardListEntry;