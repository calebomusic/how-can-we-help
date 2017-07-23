import React, { Component } from 'react';
import './App.css';

import Cards from './cards';
import CARDS from './cardData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: CARDS["question"][0]
    }

    this.onClick = this.onClick.bind(this);
  }

  onClick(type, id) {
    this.setState({cards: CARDS[type][id]});
  }

  render() {
    return (
      <div className="App">
        <Cards cards={this.state.cards} onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;


/**
 * Cards objects
 * {
 *   Id: {
 * 
 *   },
 *   BodyCard: {
 *     Title: ...
 *     Description: ...
 *   },
 *   optionCards: [
 *     {
 *       Title: ...
 *       Description: ...
 *       Pointer: ...
 *     }
 *  ]
 * }
 */