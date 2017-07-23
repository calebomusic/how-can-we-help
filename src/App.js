import React, { Component } from 'react';
import './App.css';

import QuestionCards from './questionCards';
import AnswerCards from './answerCards'
import CARDS from './cardData';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [ CARDS["question"][0] ]
    }

    this.onClickCards = this.onClickCards.bind(this);
    this.onClickBackButton = this.onClickBackButton.bind(this);
    this.renderAllCards = this.renderAllCards.bind(this);
    this.onClickBackButton = this.onClickBackButton.bind(this);
  }

  componentDidUpdate() {
    document.getElementById(`cards-${this.state.cards.length-1}`).scrollIntoView({
      behavior: "smooth"
    });
  }

  onClickCards(type, id, optionId) {
    const lastCards = this.state.cards[this.state.cards.length-1];
    
    if (lastCards.options && lastCards.options[optionId].nextId === id) {
      this.setState({
        cards: this.state.cards.concat(CARDS[type][id])
      });
    }
  }

  renderBackButton() {
    if (this.state.cards.length > 1) {
      return (
        <div className="fixed">
          <div className="pos-back-button"></div>
          <a className="btn right indigo darken-4 text-white" onClick={this.onClickBackButton}>
            <i className="material-icons right">undo</i>Back</a>
        </div>
      );
    } else {
      return <a></a>
    }
  }

  onClickBackButton() {
    if (this.state.cards.length > 1) {
      this.setState({
        cards: this.state.cards.slice(0, this.state.cards.length-1)
      })
    }
  }

  renderAllCards() {
    const allCards = [];

    this.state.cards.forEach((cards, i) => {
      if (cards.body) {
        allCards.push(
              <li className="card" key={i} id={`cards-${i}`}>
                <QuestionCards cards={cards} onClick={this.onClickCards} newCards />
              </li>);
      } else {
        allCards.push(
              <li className="card" key={i} id={`cards-${i}`}> 
                <AnswerCards  cards={cards} onClick={this.onClickCards} />
              </li>);
      }   
    });

    return allCards;
  }

  render() {
    return (
      <div>
        {this.renderBackButton()}
        <ul className="container">
          {this.renderAllCards()}
        </ul>
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