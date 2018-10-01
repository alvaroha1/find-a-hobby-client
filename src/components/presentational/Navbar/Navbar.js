import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
const menu = require('../../../assets/menu.svg')

export default class Navbar extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className="App__navbar">
        <Button className="App__navbar__tomenu">
        <Link to='/'>
          <img className="App__navbar__tomenu__icon" src={menu} alt="Menu"/>
          </Link>
        </Button>
        <h1 className="App__navbar__currentview">{this.props.title}</h1>
      </div>
    )
  }
}
