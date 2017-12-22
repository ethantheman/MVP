import React from "react";
import ReactDOM from "react-dom";
import CardView from "./components/CardView.js";
import CardList from "./components/CardList.js";
import Form from "./components/form.js"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [{'question': 'what color is the sky?', 'answer':'blue'},{'question': 'what is the moon made of?', 'answer':'cheese'},{'question': 'what is the largest planet in the solar system?', 'answer':'Jupiter'}],
      currentCard: null
    };
  }

  componentWillMount() {
    this.setState({currentCard: this.state.cards[0]})
  }

  render() {
    return (
      <div>
        <h1>Flashify</h1>
        <Form />
        <CardList cards={this.state.cards}/>
        <CardView card={this.state.currentCard} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
