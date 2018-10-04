import React from 'react';
import './HobbyMiniCard.css';
const heart_filled = require('../../../assets/heart-filled.svg');


export default class HobbyMiniCard extends React.Component {

  render() {
    return (
      <a className="App__hobbyminicard" href={'http://www.google.com/search?q=How+to+'+this.props.hobby.name}>
        <div className="App__hobbyminicard__image">
          <img src={this.props.hobby.pictures}
            alt="Hobby"></img>
        </div>
        <div className="App__hobbyminicard__display">
          <div className="App__hobbyminicard__display__info">
            <div className="App__hobbyminicard__display__info__hobby">{this.props.hobby.name}</div>
          </div>
          <div className="App__hobbyminicard__display__stats">
            <div className="App__hobbyminicard__display__stats__bars">
              <div
                className="App__hobbyminicard__display__stats__bars__exercise"
                style={{height: this.props.hobby.tags[1].average/3 + 5}}>
                <div className="App__hobbyminicard__display__stats__letters">e</div>
              </div>
              <div className="App__hobbyminicard__display__stats__bars__money"
                style={{height: this.props.hobby.tags[0].average/3 + 5}}>
                <div className="App__hobbyminicard__display__stats__letters">m</div>
              </div>
              <div className="App__hobbyminicard__display__stats__bars__creativity"
                style={{height: this.props.hobby.tags[2].average/3 + 5}}>
                <div className="App__hobbyminicard__display__stats__letters">c</div>
              </div>
            </div>
          </div>
          <div className="App__hobbyminicard__display__unfav">
            <img className="App__hobbyminicard__display__unfav__icon" src={heart_filled} alt="unfav"></img>
          </div>
        </div>

      </a>
    );
  }
}
