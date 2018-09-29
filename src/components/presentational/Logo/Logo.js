import React from 'react'
import './Logo.css'
import { Link } from 'react-router-dom';

const profile_picture = require('../../../assets/profile_picture.png')
const compass = require('../../../assets/compass.svg')
const heart = require('../../../assets/heart.svg')
const post = require('../../../assets/post.svg')
const search = require('../../../assets/search.svg')
const logout = require('../../../assets/logout.svg')


export default class Logo extends React.Component {
  render () {
    return (
      <div className="App__logo">
        <div className="App__logo__profile">
          <div className="App__logo__profile__picture"><img src={profile_picture} alt="Profile"/></div>
          <div className="App__logo__profile__userinfo">
            <div className="App__logo__profile__userinfo__name">Welcome, Joseph</div>
            <div className="App__logo__profile__userinfo__hobbies">2 Hobbies</div>
            <div className="App__logo__profile__userinfo__city">Barcelona</div>
          </div>
        </div>
        <div className="App__logo__line"></div>
        <ul className="App__logo__menu">

          <li className="App__logo__menu__discover">
            <Link to='/discover'>
            <img className="App__logo__menu--icon" src={compass}></img>
            Discover</Link>
          </li>
          <li className="App__logo__menu__favorites">
            <Link to='/favorites'>
            <img className="App__logo__menu--icon" src={heart}></img>
            Favorites</Link>
          </li>
          <li className="App__logo__menu__postHobby">
            <Link to='/create'>
            <img className="App__logo__menu--icon" src={post}>
            </img>
            Post a hobby</Link>
          </li>
          <li className="App__logo__menu__search">
            <Link to='/search'>
            <img className="App__logo__menu--icon" src={search}>
            </img>
            Search</Link>
          </li>
        </ul>
        <div className="App__logo__logout">
        <Link to='/signout'>
          <img className="App__logo__logout--icon" src={logout} alt="logout"></img>
          Logout
          </Link>
        </div>
      </div>

    )
  }
}

// <div onClick={this.props.handleClick} className='Logo-wrapper'>
//   <div className='LogoWrapper-colorHolder'>
//     <div className='color1 LogoWrapper-colorBar'></div>
//     <div className='color2 LogoWrapper-colorBar'></div>
//     <div className='color3 LogoWrapper-colorBar'></div>
//     <div className='Logo'>
//       <h1>find a Hobby!</h1>
//       <br />
//       <div style={{ display: 'flex', justifyContent: 'space-evenly'}}>
//         <i className="fas fa-dollar-sign"></i>
//         <i className="fas fa-football-ball"></i>
//         <i className="fab fa-fly"></i>
//       </div>
//     </div>
//   </div>
// </div>

// TODO: add number of hobbies available in database under the logo.
