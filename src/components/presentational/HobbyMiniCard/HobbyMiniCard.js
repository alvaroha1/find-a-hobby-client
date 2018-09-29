import React, { Component } from 'react';
import './HobbyMiniCard.css'
const heart_filled = require('../../../assets/heart-filled.svg');


export default class HobbyMiniCard extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // money: this.props.hobby.tags[0].average,
      // fit: this.props.hobby.tags[1].average,
      // creative: this.props.hobby.tags[2].average
    }
  }

  render() {
    return (
      <div className="App__hobbyminicard">
        <div className="App__hobbyminicard__image"></div>
        <div className="App__hobbyminicard__display">
          <div className="App__hobbyminicard__display__info">
            <div className="App__hobbyminicard__display__info__hobby">Hobby Title</div>
            <div className="App__hobbyminicard__display__info__description">Hobby Description</div>
          </div>
          <div className="App__hobbyminicard__display__stats">
            <div className="App__hobbyminicard__display__stats__letters">
              <div className="App__hobbyminicard__display__stats__letters__e">e</div>
              <div className="App__hobbyminicard__display__stats__letters__m">m</div>
              <div className="App__hobbyminicard__display__stats__letters__c">c</div>
            </div>
            <div className="App__hobbyminicard__display__stats__bars">
              <div className="App__hobbyminicard__display__stats__bars__exercise"></div>
              <div className="App__hobbyminicard__display__stats__bars__money"></div>
              <div className="App__hobbyminicard__display__stats__bars__creativity"></div>
            </div>
          </div>
          <div className="App__hobbyminicard__display__unfav">
            <img className="App__hobbyminicard__display__unfav__icon" src={heart_filled} alt="unfav"></img>
          </div>
        </div>

      </div>
    );
  }
}
