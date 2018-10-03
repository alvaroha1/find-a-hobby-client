import React, { Component } from 'react';
import './PicturesBrowser.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import { connect } from 'react-redux';

const url_1 ='https://api.unsplash.com/search/photos/?query=';
const url_2 ='%27&client_id=';
const API_ID ='e2c1363aa4fd8dd817c6faab14b0c557627620aa6a303b19ddd68932f62a2cc7'; 

class PicturesBrowser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentHobby: this.props.currentHobby,
      selectedPicture: '',
      imageURLS: []
    }
    this.fetchPictures()
  }

  fetchPictures = () => {
    fetch(url_1+this.props.currentHobby.name+url_2+API_ID)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      this.setState({imageURLS: myJson.results.map(image => image.urls.small)})
    })
  }

  addPicture = (url) => {
    this.setState({selectedPicture: url})
    // console.log(this.setState.currentHobby);
    // console.log(this.state.selectedPicture);
  }

  fetchHobby = async (event) => {
    const completedHobby = {
      name: this.props.currentHobby.name,
      description: this.props.currentHobby.description,
      picture: this.state.selectedPicture,
      tags: this.props.currentHobby.tags 
    }
    this.props.postHobby(completedHobby);
    console.log(completedHobby);
  }

  render() {

    return (
      <div className="App__createahobby">
        <Navbar title="Post a Hobby"></Navbar>
        <form className="App__createahobby__form">
        <div 
          className="App__createahobby__form__selectimage"
          name="pictureURL">
            <div className="flexbin">
              {this.state.imageURLS.map(url => <img src={url} key={url} onClick={() => this.addPicture(url)}/>)}
            </div>
          </div>
  
          <h3>Choose a Picture</h3>
          <Link to='/create'> 
            <input 
              className="App__createahobby__form__post" 
              type="submit" 
              value="Go Back"/>
          </Link>
          <Link to='/'>
            <input 
            className="App__createahobby__form__post" 
            type="submit" 
            value="Create Hobby"
            onClick={this.fetchHobby}/>
          </Link>      
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
      method: 'POST',
      endpoint: '/postHobby'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(PicturesBrowser);


//TO Do's

//accedir props - done via arol
//arreglar query - done fucking naming
//fer feth correctament -done
//renderitzar fotos -/done
//afegir fotos hobby - onClick?-done
//posthobby 