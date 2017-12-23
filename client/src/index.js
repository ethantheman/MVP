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
      currentCard: {}
    };
    this.getNewCard = this.getNewCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
  }

  getNewCard(c) {
    let newCards = this.state.cards;
    newCards.push(c);
    this.setState({cards: newCards});
  }

  changeCard(newCard) {
    console.log('card: ', newCard);
    this.setState({currentCard: newCard});
  }

  componentWillMount() {
    var that = this;
    $.ajax({
      type: "GET",
      url: "http://localhost:3000/cards",
      success: function(data){
        // send the card to the parent component where
        // it will update the state of cards collection
        console.log(data);
        that.setState({cards: data});
      },
      failure: function(err) {
        console.log('error :( ', err);
      },
      dataType: 'json',
      contentType : "application/json"
    });

    //this.setState({currentCard: this.state.cards[0]})
  }

  render() {
    return (
      <div>
        <h1>Flashify</h1>
        <Cardform getNewCard={this.getNewCard} />
        <CardList cards={this.state.cards} changeCard={this.changeCard}/>
        <CardView card={this.state.currentCard} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
