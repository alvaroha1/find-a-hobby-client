import React, { Component } from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';


export default class SignIn extends Component {
  
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


<form>
<input
    className="form-item"
    placeholder="Username goes here..."
    name="username"
    type="text"
    onChange={this.handleChange}
/>
<input
    className="form-item"
    placeholder="Password goes here..."
    name="password"
    type="password"
    onChange={this.handleChange}
/>
<input
    className="form-submit"
    value="SUBMIT"
    type="submit"
/>
</form>