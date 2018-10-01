import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


export default class SignIn extends Component {
  
  handleChange(e){
    this.setState(
        {
            [e.target.name]: e.target.value
        }
    )
  }
  render() {
    return (
      <div className="authForm" className="card border-dark CreateTopic">
      <h3 className="card-header">SELLING YOUR DATA IN 3, 2, 1...</h3>
        <div className="card card-body">
          <form>
            <div className="form-group">
            <input 
              type="text" 
              name="username" 
              onChange={this.onHandle} 
              placeholder="User Name" 
              className="form-control"/>
            <input 
              type="text" 
              name="password" 
              onChange={this.onHandle} 
              placeholder="Password" 
              className="form-control"/>
             <input className="button" value="Login" type="submit"></input>
             <Link to='/auth'>
                <input type="submit" className="button" value="Nah" />
              </Link>
          </div>
          </form>
        </div>
        </div>
    )
  }
}


