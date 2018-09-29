import React from 'react';
import Navbar from '../Navbar/Navbar';
import SwipeButtons from '../SwipeButtons/SwipeButtons';
import './HobbyCard.css';


export default class HobbyCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      // money: this.props.hobby.tags[0].average,
      // fit: this.props.hobby.tags[1].average,
      // creative: this.props.hobby.tags[2].average
    };
  }

  render () {
    return (
      <div className="App__hobbycard">
        <Navbar title="Discover"></Navbar>
        <div className="App__hobbycard__imagecanvas">
          <img className="App__hobbycard__imagecanvas__picture" alt="Hobby"></img>
        </div>
        <div className="App_hobycard__card"></div>
        <SwipeButtons></SwipeButtons>
      </div>
    );
  }
}

// <div className="HobbyCard-wrapper">
//   <div className="HobbyCard">
//     <div className="HobbyCard__topBar-wrapper">
//       <div className='color1 topBar'>
//         <i className="fas fa-dollar-sign"></i>
//       </div>
//       <div className='color2 topBar'>
//         <i className="fas fa-football-ball"></i>
//       </div>
//       <div className='color3 topBar'>
//         <i className="fab fa-fly"></i>
//       </div>
//     </div>
//
//     <div className='colorHolder'
//     style={{'gridTemplateColumns': `${this.state.money}%
//     ${this.state.fit}% ${this.state.creative}%`}}>
//       <div className='color1 colorBar'></div>
//       <div className='color2 colorBar'></div>
//       <div className='color3 colorBar'></div>
//     </div>
//
//     <div style={{ backgroundImage: `url('${this.props.hobby.pictures[0].big}')`}}
//     className="HobbyCard__img">
//       <div className="HobbyCard__color-holder-mask">
//         <h1>{this.props.hobby.name}</h1>
//         <p>{this.props.hobby.description}</p>
//       </div>
//     </div>
//     {/* <img src={this.props.hobby.pictures[0].big}
//       alt={this.props.hobby.name}/> */}
//   </div>
// </div>
