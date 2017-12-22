import React from 'react';
import $ from 'jquery';

class Cardform extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			question: 'enter a question',
			answer: 'enter an answer'
		}
		this.ChangeQ = this.ChangeQ.bind(this);
		this.ChangeA = this.ChangeA.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
    console.log('submitting form!');
    event.preventDefault();
    let data = {
      question: this.state.question,
      answer: this.state.answer
    }

    let sendCardToParent = this.props.getNewCard;

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/cards",
      data: JSON.stringify(data),
      success: function(data){
        console.log('success: ', JSON.parse(data));
        // send the card to the parent component where
        // it will update the state of cards collection
        sendCardToParent(JSON.parse(data));
      },
      failure: function(err) {
        console.log('error :( ', err);
      },
      contentType : "application/json"
    });


    this.setState({
      question: 'enter a question',
      answer: 'enter an answer'
    });
  }

	ChangeQ(event) {
		this.setState({
			question: event.target.value
		});
	}

	ChangeA(event) {
		this.setState({
			answer: event.target.value
		});
	}

	render(){
		return (
			<div>
	      <form onSubmit={this.handleSubmit}>
	        <input type="text" id="question" value={this.state.question} onChange={this.ChangeQ}/>
	        <input type="text" id="answer" value={this.state.answer} onChange={this.ChangeA}/>
	        <input type="submit"/>
	      </form>
	     </div>
			);
	}
}

export default Cardform;