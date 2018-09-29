import React, { Component } from 'react';
import './Search.css';
import Navbar from '../Navbar';

export default class Search extends Component {


  render() {
    return (
      <div className="App__search">
        <Navbar></Navbar>
        <input className="App__search__input" type="text" name="search" placeholder="Find a Hobby"></input>
        <div className="App__search__results">
          <ul className="App__search__results__recommended">Recommended:
            <li>Archery</li>
          </ul>
        </div>

      </div>
    );
  }
}
