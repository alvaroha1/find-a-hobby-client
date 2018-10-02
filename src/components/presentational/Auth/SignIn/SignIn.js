import React from 'react';
import './SignIn.css';
import { Link } from 'react-router-dom';
import background from'../../../../assets/login_background.png';


export default class SignIn extends React.Component {

  handleChange(e){
    this.setState(
      {
        [e.target.name]: e.target.value,
      }
    );
  }
  render() {
    return (
      <div className="App__signin">
        <div className="App__signin__logo">Find a<br></br>hobby!</div>
        <img className="App__signin__background" src={background}></img>
        <h3 className="App__signin__title">LOG IN</h3>
        <form className="App__signin_form">
          <input
            type="text"
            name="username"
            onChange={this.onHandle}
            placeholder="User Name"
            className="App__signin_form__input"/>
          <input
            type="text"
            name="password"
            onChange={this.onHandle}
            placeholder="Password"
            className="App__signin_form__input"/>
          <input className="App__signin_form__buttons__button__login" value="Login" type="submit"></input>
          <a className="App__signin_form__buttons__forgot" >Forgot password?</a>

          <div className="App__signin_form__buttons__signup">
            <div className="App__signin_form__buttons__noaccount">Don't have an account?</div>
            <Link to='/signup'>
              <input type="submit" className="App__signin_form__buttons__button" value="Create" />
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
