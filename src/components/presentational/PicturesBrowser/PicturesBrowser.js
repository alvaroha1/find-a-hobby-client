import React, { Component } from 'react';
import './PicturesBrowser.css';
import { Link } from 'react-router-dom';

const url = 'https://api.unsplash.com/search/photos/?query=%27+product+%27&client_id='
const API_ID = 'e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 
const yoga = 'yoga';

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

  render() {
    return (
      <div className="PicturesBrowser">
      <h3>title</h3>
          <form>
            <input 
              type="text" 
              name="title" 
              onChange={this.onHandle} 
              placeholder="Name your hobby"/>
             <input 
              className="button" 
              value="ADD" 
              type="submit"/>
          </form>
        </div>
    )
  }
}
