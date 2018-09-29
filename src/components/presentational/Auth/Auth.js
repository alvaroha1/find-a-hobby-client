import React, { Component } from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';


export default class Auth extends Component {
  
  render() {
    return (
      <div className="Auth">
        <div className="authForm">
          <form>
            <h1>HEY YOU BORED MORON</h1>
              <Link to='/signup'>
                <input type="submit" className="button" value="Register" />
              </Link>
              <Link to='/signin'>
                <input type="submit" className="button" value="Log In" />
              </Link>
            </form>
        </div>
          
      </div>
    )
  }
}
