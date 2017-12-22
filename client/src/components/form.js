import React from 'react';
import $ from 'jquery';

class Form extends React.Component {
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

	handleSubmit(event){
		console.log('submitting form!');
		event.preventDefault();
		let data = {
			question: this.state.question,
			answer: this.state.answer
		}

		$.ajax({
      type: "POST",
      url: "http://localhost:3000/cards",
      data: JSON.stringify(data),
      success: function(){
        console.log('success');
      },
      error: function(err) {
      	console.log('error :( ', err);
      },
      dataType: "json",
      contentType : "application/json"
    })


		this.setState({
			question: 'enter a question',
			answer: 'enter an answer'
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

export default Form;