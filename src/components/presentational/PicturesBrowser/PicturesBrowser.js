import React, { Component } from 'react';
import './PicturesBrowser.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const url = 'https://api.unsplash.com/search/photos/?query=%27+product+%27&client_id='
const API_ID = 'e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 
const input = '';
const localServer = 'http://localhost:3001/create';

export default class PicturesBrowser extends Component {
  fetchPictures() {
    fetch(url+API_ID)
    .then(function(response) {
      return response.json();
    })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
  }

  fetchHobby = (e) => {
    fetch(localServer, {
      method: 'POST', 
      body: JSON.stringify(e), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(console.log('hobby posted'))
  };

  render() {
    return (
      <div className="App__createahobby">
        <Navbar title="Post a Hobby"></Navbar>
        <form className="App__createahobby__form">
        <div 
          className="App__createahobby__form__selectimage"
          name="pictureURL"
          placeholder="Picture e.g. https://vegan.me/soup.jpg"
          // value={this.state.picture}
          // onChange={this.handleInputChange}
          >
          </div>
  
          <h3>Choose a Picture</h3>
            <input 
            className="App__createahobby__form__post" 
            type="submit" 
            name="Create!"
            onClick={this.fetchHobby}/>
        </form>
      </div>
    )
  }
}

/*
Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", 
<https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", 
<https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", 
<https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"

https://api.unsplash.com/search/photos/?per_page=10&query=house+product+%27&client_id=e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7


export function getMovies() {
  fetch('http://movied.herokuapp.com/discover')
  .then(function(response) {
    return response.json();
  })
  .then((myJson) => {
    this.setState({
      movies: myJson
    });
  });

};

export function renderMovies() {
  return this.state.movies.map(movie => <img onClick={this.getClicked} onMouseOver={this.getDragged} onMouseOut={this.getUndragged} className="moviePoster" src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path }></img>)
};

  renderMovies = () => {
    return this.state.myMovies.map(movie => <img onClick={this.getClicked} onMouseOver={this.getDragged} onMouseOut={this.getUndragged} className="moviePoster" src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path }></img>)
  };

  fetchPictures(title) {
    fetch(`https://api.unsplash.com/search/photos/?query=${title}+product+%27&client_id=`+ API_ID)
    .then(function(response) {
      return response.json();
    })
    .then((myJson) => {
      this.setState({
        pictures: myJson
      });
    });
  }

  const url = 'https://api.unsplash.com/search/photos/?query=%27+product+%27&client_id='
const API_ID = 'e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 
const input = '';
const url2 = ''
  addHobby = (e) => {
    fetch(url2, {
      method: 'POST', 
      body: JSON.stringify(e), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(console.log('hobby posted'))
  };
*/