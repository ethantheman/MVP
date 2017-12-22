import React from 'react';
 
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    };
  }
 
  render() {
    return (
      <div>
        <h1>Card Element</h1>
      </div>
    );
  }
}

export default Card;