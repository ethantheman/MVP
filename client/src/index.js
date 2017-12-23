import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';
import CardView from "./components/CardView.js";
import CardList from "./components/CardList.js";
import Cardform from "./components/Cardform.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
      currentCard: {},
      status: 'init'
    };
    this.getNewCard = this.getNewCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  getNewCard(c) {
    let newCards = this.state.cards;
    newCards.push(c);
    this.setState({cards: newCards});
  }

  changeCard(newCard) {
    this.setState({currentCard: newCard, status: 'q'});
  }

  toggle(e) {
    // toggle question or answer on click of CardView
    e.preventDefault();
    // status determines whether question or answer is displayed on cardview.
    if ( this.state.status === 'q' ) {
      this.setState({status: 'a'});
    } else if ( this.state.status === 'a' ) {
      this.setState({status: 'q'});
    }
  }

  componentWillMount() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/cards",
      success: function(data){
        that.setState({cards: data});
      },
      failure: function(err) {
        console.log('error :( ', err);
      },
      dataType: 'json',
      contentType : "application/json"
    });
  }

  render() {
    return (
      <div>
        <h1>Flashify</h1>
        <Cardform getNewCard={this.getNewCard} />
        <CardList cards={this.state.cards} changeCard={this.changeCard}/>
        <CardView card={this.state.currentCard} status={this.state.status} onClick={this.toggle}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
