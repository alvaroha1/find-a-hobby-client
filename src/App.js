import React, { Component } from 'react';
import './App.css';
import Logo from './components/presentational/Logo'
import HobbyCard from './components/presentational/HobbyCard'
import Search from './components/presentational/Search'
import CreateAHobby from './components/presentational/CreateHobby'
import Favorites from './components/presentational/Favorites'
import Auth from './components/presentational/Auth'
import SignUp from './components/presentational/Auth/SignUp/SignUp'
import SignIn from './components/presentational/Auth/SignIn/SignIn'



import { Route } from 'react-router-dom'
import PicturesBrowser from './components/presentational/PicturesBrowser/PicturesBrowser';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      // likedHobbies: [],
      // dislikedHobbies: [],
      // seenHobbies: [],
      // currentView: 'Logo',
      // newUser: true,
    }
  }

  componentDidMount(){
    // this.watchForNewUser();
  }

  // setHobbyAsSeen = (hobby) => {
  //   this.setState({seenHobbies: [...this.state.seenHobbies, hobby]})
  // }

  // passLikedHobby = (hobby) => {
  //   this.setState({likedHobbies: [...this.state.likedHobbies, hobby]})
  //   this.setHobbyAsSeen(hobby);
  // }
  //
  // passDislikedHobby = (hobby) => {
  //   this.setState({dislikedHobbies: [...this.state.dislikedHobbies, hobby]})
  //   this.setHobbyAsSeen(hobby);
  // }
  //
  // changeView = (currentView) => {
  //   this.setState({currentView})
  // }

  // watchForNewUser = () => {
  //   const token = window.localStorage.token;
  //   if (token) this.setState({
  //     newUser: false
  //   });
  // }
  //
  // changeViewAfterLogo = () => {
  //   this.state.newUser
  //   ? this.setState({currentView: 'Presentation'})
  //   : this.setState({currentView: 'Discover'})
  // }
  //
  // renderBigScreenMenu = () => {
  //   const { currentView } = this.state
  //   return window.innerWidth >= 1025 && currentView !== 'Logo' && currentView !== 'Presentation'
  //   ? < BigScreenMenu changeView = {this.changeView}/>
  //   : null
  // }

  // renderSideMenu = () => {
  //   return window.innerWidth < 1025 ?
  //     <SplitterSide className = 'sideMenu'
  //     side = 'left'
  //     width = {'20%'}
  //     collapse = {true}
  //     swipeable = {true}
  //     sideMenuIsOpen = {this.state.sideMenuIsOpen}
  //     onClose = {this.hide}
  //     onOpen = {this.show}
  //     animation = {'push'}>
  //       <Page>
  //         <div className = "SideMenu__items-list">
  //           <div className = "SideMenu__items-list-mask">
  //             <i onClick = {() => this.changeView('PostHobby')} className = "zmdi zmdi-edit" > </i>
  //             <i onClick = {() => this.changeView('Discover')} className = "zmdi zmdi-eye" > </i>
  //             <i onClick = {() => this.changeView('List')} className = "zmdi zmdi-favorite-outline" > </i> { /* TODO: add this menus for user and settings, icons are already here */ } {
  //               /* <i onClick={() => this.changeView('Profile')} class="zmdi zmdi-face"></i>
  //                               <i onClick={() => this.changeView('Settings')} class="zmdi zmdi-settings"></i> */
  //             }
  //           </div>
  //         </div>
  //       </Page>
  //     </SplitterSide>
  //   : null
  // }

  render() {

    // let view;
    // switch (this.state.currentView) {
    //   case 'Logo':
    //   view = <Logo handleClick={this.changeViewAfterLogo} />
    //   break;
    //   case 'Presentation':
    //     view = <Presentation handleClick={() => this.changeView('Discover')}/>
    //     break;
    //   case 'Discover':
    //     view = <Discover passLikedHobby={this.passLikedHobby}
    //       passDislikedHobby={this.passDislikedHobby}
    //       seenHobbies={this.state.seenHobbies}/>
    //     break;
    //   case 'List':
    //     view = <List hobbies={this.state.likedHobbies}/>
    //     break;
    //   case 'PostHobby':
    //     view = <PostHobby />
    //     break;
    //   default:
    //   view = <h1>Oops something went wrong!</h1>

    return (
      <div className="App">
        <Route path="/discover" exact component={HobbyCard} />
        <Route path="/search" exact component={Search} />
        <Route path="/create" exact component={CreateAHobby} />
        <Route path="/favorites" exact component={Favorites} />
        <Route path="/" exact component={Logo} />
        <Route path="/auth" exact component={Auth} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signout" exact component={Auth} />
        <Route path="/pictures" exact component={PicturesBrowser} />

      </div>
    );
  }
}
export default App;


// let view;
// switch (this.state.currentView) {
//   case 'Logo':
//   view = <Logo handleClick={this.changeViewAfterLogo} />
//   break;
//   case 'Presentation':
//     view = <Presentation handleClick={() => this.changeView('Discover')}/>
//     break;
//   case 'Discover':
//     view = <Discover passLikedHobby={this.passLikedHobby}
//       passDislikedHobby={this.passDislikedHobby}
//       seenHobbies={this.state.seenHobbies}/>
//     break;
//   case 'List':
//     view = <List hobbies={this.state.likedHobbies}/>
//     break;
//   case 'PostHobby':
//     view = <PostHobby />
//     break;
//   default:
//   view = <h1>Oops something went wrong!</h1>
// }


// <div className="App">
//     {view}
//       {this.renderBigScreenMenu()}
// </div>
