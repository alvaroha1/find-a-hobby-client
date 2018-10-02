import React, { Component } from 'react';
import './PicturesBrowser.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { connect } from 'react-redux';

const url_1 ='https://api.unsplash.com/search/photos/?query=';
const url_2 ='%27&client_id=';
const API_ID ='e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 
const localServer = 'http://localhost:3001/create';
// const title = this.props.currentHobby.title;

class PicturesBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHobby: this.props.currentHobby
    }
  }

  fetchPictures = () => {
    fetch(url_1+this.state.currentHobby.title+url_2+API_ID)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      
      let img = myJson.results.map(image => image.urls.small);
      console.log(img);
    });
  }

  test = (event) => {
    console.log(this.state.currentHobby,'hey');
    event.preventDefault();
    // this.fetchPictures();
  }

  addPicture = (event) => {
    this.setState.currentHobby.picture = event;
  }

  fetchHobby = async (event) => {
    const hobby = this.state;

    const completeHobby = {
      name: hobby.name,
      description: hobby.description,
      picture: hobby.picture,
      tags: hobby.tags 
    }
    this.setState(completeHobby);
    this.props.createHobby(completeHobby);
  }

  render() {
    this.fetchPictures();
    return (
      <div className="App__createahobby">
        <Navbar title="Post a Hobby"></Navbar>
        <form className="App__createahobby__form">
        <div 
          className="App__createahobby__form__selectimage"
          name="pictureURL">
            <div className="flexbin">
              {/* {pictures.map(el => <a value={el} key={el}> {el} onClick={this.addPicture}</a>)} */}
              
              <a onClick={this.test}>
                  <img src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM3ODc2fQ&s=18629391c0453d348eb13b22c6a6611d" />
              </a>
              <a onClick={this.test}>
                  <img src="https://images.unsplash.com/photo-1534105615256-13940a56ff44?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM3ODc2fQ&s=606b44cc5b1136621626dcbfdc2330fb" />
              </a>
              <a onClick={this.test}>
                  <img src="https://images.unsplash.com/photo-1526049997133-25caee4c5796?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjM3ODc2fQ&s=8b437093ab70092fd8e9609858b2445e" />
              </a>
            </div>
          </div>
  
          <h3>Choose a Picture</h3>
          <Link to='/create'> 
            <input 
              className="App__createahobby__form__post" 
              type="submit" 
              value="Go Back"
              onClick={this.fetchHobby}/>
          </Link>
            <input 
            className="App__createahobby__form__post" 
            type="submit" 
            value="Create Hobby"
            onClick={this.fetchHobby}/>
               <input 
            className="App__createahobby__form__post" 
            type="submit" 
            value="Test"
            onClick={this.test}/>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currentHobby: state.currentHobby
});

const mapDispatchToProps = (dispatch) => ({
  postHobby: () => dispatch({
    type: 'POSTHOBBY',
    api: {
      endpoint: '/postHobby'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(PicturesBrowser);


//TO Do's

//accedir props
//arreglar query - com afegir title
//fer feth correctament
//renderitzar fotos - passar variable
//afegir fotos hobby - onClick?
//posthobby 