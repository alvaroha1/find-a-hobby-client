import React from 'react';
import './Logo.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const profile_picture = require('../../../assets/profile_picture_william.jpg');
const compass = require('../../../assets/compass.svg');
const heart = require('../../../assets/heart.svg');
const post = require('../../../assets/post.svg');
const search = require('../../../assets/search.svg');
const logout = require('../../../assets/logout.svg');


export class Logo extends React.Component {

  componentDidMount() {
    this.props.dashboard()
  }

  logUserOut = () => {
    this.props.logout();
    this.props.history.push('/signin');
  }

  render () {
    return (
      <div className="App__logo">
        <div className="App__logo__profile">
          <div className="App__logo__profile__picture"><img src={profile_picture} alt="Profile"/></div>
          <div className="App__logo__profile__userinfo">
            <div className="App__logo__profile__userinfo__name">Welcome, {this.props.user.name}</div>
            <div className="App__logo__profile__userinfo__hobbies">
              {this.props.user.likedHobbies? this.props.user.likedHobbies.length : ''} Hobbies</div>
            <div className="App__logo__profile__userinfo__city">Barcelona</div>
          </div>
        </div>
        <div className="App__logo__line"></div>
        <ul className="App__logo__menu">

          <li className="App__logo__menu__discover">
            <Link to='/discover'>
              <img className="App__logo__menu--icon" src={compass} alt="compass"></img>
            Discover</Link>
          </li>
          <li className="App__logo__menu__favorites">
            <Link to='/favorites'>
              <img className="App__logo__menu--icon" src={heart} alt="heart"></img>
            Favorites</Link>
          </li>
          <li className="App__logo__menu__postHobby">
            <Link to='/create'>
              <img className="App__logo__menu--icon" src={post} alt="pencil">
              </img>
            Post a hobby</Link>
          </li>
          <li className="App__logo__menu__search">
            <Link to='/search'>
              <img className="App__logo__menu--icon" src={search} alt="search">
              </img>
            Search</Link>
          </li>
        </ul>
        <div className="App__logo__logout">
            <img className="App__logo__logout--icon"
              src={logout}
              alt="logout"
              onClick={this.logUserOut} ></img>
            Logout
        </div>
        <div className="App__logo__footer"></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userData
});


const mapDispatchToProps = dispatch => ({
  logout: () => dispatch({
    type: 'LOG_OUT',
  }),
  dashboard: () => dispatch({
    type: 'DASHBOARD',
    api: {
      endpoint: '/'
    }
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Logo);
