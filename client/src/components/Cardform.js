import React from 'react';
import $ from 'jquery';

class Cardform extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			question: '',
			answer: ''
		}
		this.ChangeQ = this.ChangeQ.bind(this);
		this.ChangeA = this.ChangeA.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
    event.preventDefault();
    let data = {
      question: this.state.question,
      answer: this.state.answer
    }
    // getNewCard is passed from parent via props
    let sendCardToParent = this.props.getNewCard;

    $.ajax({
      type: "POST",
      url: "http://localhost:3000/cards",
      data: JSON.stringify(data),
      success: function(data){
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
      question: '',
      answer: ''
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
			<div className="form-group">
	      <form onSubmit={this.handleSubmit} className="form-inline">
	        <input type="text" className="form-control" placeholder="enter a question" value={this.state.question} onChange={this.ChangeQ}/>
	        <input type="text" className="form-control" placeholder="enter an answer" value={this.state.answer}  onChange={this.ChangeA}/>
	        <input type="submit" className="btn btn-primary btn-md"/>
	      </form>
	     </div>
			);
	}
}

export default Cardform;