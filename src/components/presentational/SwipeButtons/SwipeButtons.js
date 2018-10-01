import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SwipeButtons.css';
const heart_filled = require('../../../assets/heart-filled.svg');
const cross = require('../../../assets/cross.svg');


export class SwipeButtons extends Component {

  constructor(props) {
    super(props);
  }

  likeThisHobby = () => {
    this.props.likeHobbie(this.props.Id);
  }

  dislikeThisHobby = () => {
    this.props.dislikeHobbie(this.props.Id);
  }


  render() {

    return (
      <div className="App__swipebuttons">
        <div onClick={this.likeThisHobby} className='App__swipebuttons__like'>
          <img className='App__swipebuttons__like--icon' src={heart_filled} alt="Like"></img>
        </div>
        <div className="App__swipebuttons__stats">
          <div className="App__swipebuttons__stats__exercise"
            style={{height: this.props.tags[1].average}}>e</div>
          <div className="App__swipebuttons__stats__money"
            style={{height: this.props.tags[0].average}}>m</div>
          <div className="App__swipebuttons__stats__creativity"
            style={{height: this.props.tags[2].average}}>c</div>
        </div>
        <div onClick={this.dislikeThisHobby} className='App__swipebuttons__dislike'>
          <img className='App__swipebuttons__dislike--icon' src={cross} alt="Dislike"></img>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
});

const mapDispatchToProps = (dispatch) => ({
  likeHobbie: (id) => dispatch({
    type: 'LIKE',
    api: {
      method: 'PUT',
      endpoint: '/discover/like',
      body: { hobbyId: id }
    }
  }),
  dislikeHobbie: (id) => dispatch({
    type: 'DISLIKE',
    api: {
      method: 'PUT',
      endpoint: '/discover/dislike',
      body: { hobbyId: id }
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(SwipeButtons);
