import React from "react";
import ReactDOM from "react-dom";
import CardView from "./components/CardView.js";
import CardList from "./components/CardList.js";
import Cardform from "./components/Cardform.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{question: "what color is the sky?", answer: "blue"}],
      currentCard: null
    };
    this.getNewCard = this.getNewCard.bind(this);
  }

  getNewCard(c) {
    let newCards = this.state.cards;
    newCards.push(c);
    this.setState({cards: newCards});
  }

  changeCard(e) {
    console.log('hi!!');
    // this.setState({currentCard: card});
  }

  componentWillMount() {
    this.setState({currentCard: this.state.cards[0]})
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
