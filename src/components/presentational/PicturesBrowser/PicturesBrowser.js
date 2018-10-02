import React, { Component } from 'react';
import './PicturesBrowser.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';


const url = 'https://api.unsplash.com/search/photos/?query=%27+product+%27&client_id='
const API_ID = 'e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 
const input = '';
const localServer = 'http://localhost:3001/create';
// const queryURL = 'https://api.unsplash.com/search/photos/?query='+ this.state.title + '%27&client_id=' + this.API_ID;
const queryURLT = 'https://api.unsplash.com/search/photos/?query='+ 'cars' + '%27&client_id=' + this.API_ID;


export default class PicturesBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: '',
    }
  }


  fetchPictures() {
    fetch(queryURLT)
    .then(function(response) {
      return response.json();
    })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });
  }

  fetchHobby = () => {
    const fHobby = this.state;
    fetch(localServer, {
      method: 'POST', 
      body: JSON.stringify(fHobby), 
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(console.log('hobby sent to the db'))
  };

  test() {
    console.log('hey you');
  }

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
            <div className="flexbin">
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
            <input 
            className="App__createahobby__form__post" 
            type="submit" 
            name="Create!"
            onClick={this.fetchHobby}/>
               <input 
            className="App__createahobby__form__post" 
            type="submit" 
            name="Create!"
            onClick={this.fetchPictures}/>
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
