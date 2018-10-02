import React, { Component } from 'react';
import HobbyCard from '../../presentational/HobbyCard'
import { connect } from 'react-redux';

export class Discover extends Component {

  constructor(props) {
    super(props);
    this.postHobbiesToDiscover();
  }

  postHobbiesToDiscover = async () => {
    await this.props.getHobbiesFromDatabase()
}

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
