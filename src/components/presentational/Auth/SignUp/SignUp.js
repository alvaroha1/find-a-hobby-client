import React, { Component } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const url12 = 'http://localhost:30001/users';

export default class SignUp extends Component {
  constructor (props) {
  super(props);
  this.state = {
    userName: '',
    password: '',
    email: ''
  };
}

createUser = (event) => {
  event.preventDefault(); 
  this.props.createUser(this.state);
  console.log(this.state);
  // event.currentTarget.reset();
}

// addEvent = (event) => {
//   fetch(url2, {
//     method: 'POST', 
//     body: JSON.stringify(event), 
//     headers:{
//       'Content-Type': 'application/json'
//     }
//   }).then(res => res.json())
//   .then(res => this.fetchEvents())
//   .catch(error => console.error('Error:', error));
// }

// onHandle = (e) => {
//   this.setState({ [e.target.name]: e.target.value });
// }
  render() {
    return (
      <div className="authForm" className="card border-dark CreateTopic">
      <h3 className="card-header">SELLING YOUR DATA IN 3, 2, 1...</h3>
        <div className="card card-body">
          <form>
            <div className="form-group">
            <input type="text" name="username" onChange={this.onHandle} placeholder="User Name" className="form-control"/>
            <input type="text" name="password" onChange={this.onHandle} placeholder="Password" className="form-control"/>
            <input type="text" name="password" onChange={this.onHandle} placeholder="Repeat your Password" className="form-control"/>
            <input type="email" name="email" onChange={this.onHandle} placeholder="Email" className="form-control"/>
             <input type="submit" name="Login" className="button" onClick={this.createUser}/>
             <Link to='/auth'>
                <input type="submit" className="button" value="Nah" />
              </Link>
          </div>
          </form>
        </div>
        </div>
    )
  }
}



// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import './SignUp.css';

// import { connect } from 'react-redux';
// import { Redirect } from 'react-router';
// import { createUser } from '../../../redux/actions';

// class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       first_name: '',
//       last_name: '',
//       password: '',
//       email: '',
//       user_image_path: '',
//       signedUp: false
//     };
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.user !== prevProps.user) {
//       console.log('yes ');
//       this.setState({ signedUp: true });
//     }
//   }
//   sendSignUp = event => {
//     event.preventDefault();

//     const signUpDetails = {
//       username: this.state.username,
//       first_name: this.state.first_name,
//       last_name: this.state.last_name,
//       password: this.state.password,
//       email: this.state.email,
//       user_image_path: this.state.user_image_path
//     };

//     this.props.createNewUser({
//       endpoint: `/users/`,
//       method: 'POST',
//       body: signUpDetails
//     });
//   };

//   handleFormChange = event => {
//     this.setState({
//       [event.target.name]: event.target.value
//     });
//   };

//   renderInput = (label, type, name) => {
//     return (
//       <div className="divider">
//         {/*<span> {label} </span>*/}
//         <input
//           className="inputField"
//           type={type}
//           onChange={this.handleFormChange}
//           name={name}
//           placeholder={label}
//         />
//       </div>
//     );
//   };
//   renderProfile = () => {
//     if (this.state.signedUp) {
//       console.log('yes NUMERO DOS ');
//       return <Redirect to="/profile" />;
//     }
//   };

//   render() {
//     return (
//       <div className="signUpContainer">
//         <img className="logo" src="backgrounds/logo.png" alt="App logo" />

//         <div className="title">
//           <h3> Sign Up </h3>
//         </div>

//         <div className="signUpFormContainer">
//           <form className="signUpForm">
//             {this.renderInput('Username', 'text', 'username')}
//             {this.renderInput('First Name', 'text', 'first_name')}
//             {this.renderInput('Last Name', 'text', 'last_name')}
//             {this.renderInput('Password', 'text', 'password')}
//             {this.renderInput('Email', 'text', 'email')}
//           </form>
//         </div>

//         <div className="SignUpButton" onClick={this.sendSignUp}>
//           Register
//         </div>
//         <div className="SignUp">
//           <Link to="/">
//             {' '}
//             Returning? <strong>Login.</strong>{' '}
//           </Link>
//         </div>

//         {this.renderProfile()}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => ({
//   createNewUser: apiInfo => dispatch(createUser(apiInfo))
// });

// const mapStateToProps = state => ({
//   user: state.user,
//   error: state.error
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(SignUp);