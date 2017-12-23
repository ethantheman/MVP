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
      status: 'init' // status determines what is displayed on the card
    };
    this.getNewCard = this.getNewCard.bind(this);
    this.changeCard = this.changeCard.bind(this);
    this.toggle = this.toggle.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
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
    // display question or answer when CardView gets clicked
    e.preventDefault();
    if ( this.state.status === 'q' ) {
      this.setState({status: 'a'});
    } else if ( this.state.status === 'a' ) {
      this.setState({status: 'q'});
    }
  }

  deleteCard(card) {
    console.log(card);
    let that = this;
    $.ajax({
      type: "POST",
      url: "http://localhost:3000/",
      data: JSON.stringify(card),
      success: function(data){
        let newCards = that.state.cards;
        console.log(newCards);
        for ( var i = 0; i < newCards.length; i++ ) {
          if ( newCards[i].question === card.question ) {
            // remove the card from the array
            newCards = newCards.slice(0, i).concat(newCards.slice(i+1, newCards.length));
            break;
          }
        }
        console.log('empty newCards: ', newCards);
        that.setState({
          cards: newCards,
          currentCard: {},
          status: 'init'
        });

      },
      failure: function(err) {
        console.log('error :( ', err);
      },
      dataType: 'json',
      contentType : "application/json"
    });
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
    const title = {
      "textAlign": "center",
      "fontWeight": "bold"
    }

    return (
      <div>
        <div style={{"textAlign": "center"}}>
          <p className="display-4" style={title}>Flashify</p>
          <div style={{"display": "inline-block"}}>
            <Cardform getNewCard={this.getNewCard} />
          </div>
        </div>
        <div>
          <div style={{"width": "50%", "float":"left"}}>
            <CardList cards={this.state.cards} changeCard={this.changeCard} deleteCard={this.deleteCard}/>
          </div>
          <div style={{"width": "50%", "float":"right"}}>
            <CardView card={this.state.currentCard} status={this.state.status} onClick={this.toggle}/>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
