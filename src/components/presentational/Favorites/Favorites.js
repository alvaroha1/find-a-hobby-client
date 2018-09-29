import React, { Component } from 'react';
import './Favorites.css';
import Navbar from '../Navbar';
import HobbyMiniCard from '../HobbyMiniCard';

export default class Favorites extends Component {

  render() {
    return (
      <div className="App__favorites">
        <Navbar title="Favorites"></Navbar>
        <div className="App__favorites__list">
          <HobbyMiniCard></HobbyMiniCard>
          <HobbyMiniCard></HobbyMiniCard>
          <HobbyMiniCard></HobbyMiniCard>
          <HobbyMiniCard></HobbyMiniCard>
        </div>
      </div>
    );
  }
}
