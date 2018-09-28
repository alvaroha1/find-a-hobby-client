import React, { Component } from 'react';
import './SwipeButtons.css'
const heart_filled = require('../../../assets/heart-filled.svg')
const cross = require('../../../assets/cross.svg')


class SwipeButtons extends Component {
  render() {
    return (
      <div className="App__swipebuttons">
        <div onClick={this.props.onLike} className='App__swipebuttons__like'>
          <img className='App__swipebuttons__like--icon' src={heart_filled}></img>
        </div>
        <div onClick={this.props.onDislike} className='App__swipebuttons__dislike'>
          <img className='App__swipebuttons__dislike--icon' src={cross}></img>
        </div>
      </div>
    );
  }
}

export default SwipeButtons;
