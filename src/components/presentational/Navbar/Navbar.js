import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Navbar.css'
const menu = require('../../../assets/menu.svg')

export default class Navbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div className="App__navbar">
        <Button className="App__navbar__tomenu">
          <img className="App__navbar__tomenu__icon" src={menu} alt="Menu"/>
        </Button>
        <h1 className="App__navbar__currentview">Discover</h1>
      </div>
    )
  }
}
