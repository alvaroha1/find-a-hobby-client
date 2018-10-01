import React, { Component } from 'react';
// import './Discover.css';
import HobbyCard from '../../presentational/HobbyCard'
// import SwipeButtons from '../../presentational/SwipeButtons'
// import FetchingHobbiesSpinner from '../../presentational/FetchingHobbiesSpinner'

// import ApiClient from '../../../lib/apiClient';
// import discardSeenHobbies from '../../../Helpers/discardSeenHobbies';
import { connect } from 'react-redux';


// const numberOfCards = 3;
// const neededCardsLeftToRefresh = 2;

//number of cards needed prior to start recommending things
//Perhaps it's useful to move this variable to a config file
// const neededCardsPriorRec = 1;

export class Discover extends Component {

  constructor(props) {
    super(props);
    this.postHobbiesToDiscover();
    // console.log(this.state)
  }
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     hobbies : [],
  //     noHobbies: false,
  //     loading: true,
  //   }
  //   this.setHobbies();
  // }

  postHobbiesToDiscover = async () => {

    await this.props.getHobbiesFromDatabase()

  //amount of hobbies left to rate when loading the component??
  // const hobbiesLGTH = this.props.hobbies.length
  // if (hobbiesLGTH > neededCardsLeftToRefresh) return;

  //it needs at least 1 card rated to start recommending things
  // let randomHobbies = this.props.seenHobbies.length > neededCardsPriorRec
  // ? await this.props.getRecommendedHobbies() //fetch
  // : await this.props.getRandomHobbies(); //fetch
  //
  //




  //get the first 3 random cards
  // randomHobbies = randomHobbies.slice(0, numberOfCards)

  // const seenHobbies = [...this.props.seenHobbies, ...this.props.hobbies];

  //discard Seen Hobbies
  // randomHobbies = discardSeenHobbies(randomHobbies, seenHobbies);

  //why???? why don't get recommended hobbies???
  // if (randomHobbies.length === 0) {
  //   randomHobbies = await this.props.getRandomHobbies(); //fetch
  //   randomHobbies = discardSeenHobbies(randomHobbies, seenHobbies);
  // }

  // console.log('setting new hobbies:',randomHobbies);
  // this.setState({
  //   hobbies: [...randomHobbies, ...this.props.hobbies],
  //   loading: false
  // });
  // this.handleNoHobbies()
}

  // handleOnLike = () => {
  //   // console.log(this.state.hobbies);
  //   let hobbies = this.state.hobbies;
  //   if (hobbies.length < 1) return;
  //   const hobby = hobbies[hobbies.length-1];
  //   this.props.likeHobbie(hobby._id) //fetch
  //   this.props.Hobby(hobby)
  //   hobbies.pop();
  //   this.setState({hobbies});
  //   this.setHobbies();
  //   this.handleNoHobbies();
  // }

  // handleOnDislike = () => {
  //   let hobbies = this.state.hobbies;
  //   if (hobbies.length < 1) return;
  //   const hobby = hobbies[hobbies.length-1]
  //   this.props.dislikeHobbie(hobby._id) //fetch
  //   this.props.passDislikedHobby(hobby)
  //   hobbies.pop();
  //   this.setState({hobbies});
  //   this.setHobbies();
  //   this.handleNoHobbies();
  // }

  // handleNoHobbies = () => {
  //   if (this.state.hobbies.length !== 0) return;
  //   this.setState({
  //     noHobbies: true,
  //     loading:true
  //   })
  // }

  // passLikedHobby = (hobby) => {
  //   this.setState({likedHobbies: [...this.state.likedHobbies, hobby]})
  //   this.setHobbyAsSeen(hobby);
  // }

  // passDislikedHobby = (hobby) => {
  //   this.setState({dislikedHobbies: [...this.state.dislikedHobbies, hobby]})
  //   this.setHobbyAsSeen(hobby);
  // }


  render() {
    let hobbies = this.props.hobbies.map(card => {
      return <HobbyCard
        hobby={card}
        key={card._id}
        ></HobbyCard>
    })

    return (
      hobbies.length ? hobbies[0] : <HobbyCard></HobbyCard>
    );
  }
}

const mapStateToProps = (state) => ({
  hobbies: state.hobbies,
});

const mapDispatchToProps = (dispatch) => ({
  getHobbiesFromDatabase: () => dispatch({
    type: 'DISCOVER',
    api: {
      endpoint: '/discover'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Discover);
