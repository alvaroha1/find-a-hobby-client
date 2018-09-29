import React from 'react';
import './CreateAHobby.css';
import Navbar from '../Navbar';

export default class CreateAHobby extends React.Component {

  render() {
    return (
      <div className="App__createahobby">
        <Navbar title="Post a Hobby"></Navbar>
        <form className="App__createahobby__form">
          <input className="App__createahobby__form__title" type="text" name="hobby" placeholder="Title" />
          <input className="App__createahobby__form__description" type="text" name="description" placeholder="Description" />
          <div className="App__createahobby__form__selectimage"></div>
          <input className="App__createahobby__form__post" type="submit" name="Create!"/>
        </form>
      </div>
    );
  }
}
