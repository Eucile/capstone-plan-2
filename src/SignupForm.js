import React from 'react';
import { Redirect } from 'react-router';
import ee from './assets/images/eucileglyph.png';

class SignupForm extends React.Component{

  handleSignup = () => {
    this.props.firebase.auth().createUserWithEmailAndPassword(this.name.value, this.email.value, this.password.value).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  render() {
    return(
      <div className="LogInStyles">
        <form onSubmit={this.handleSignup} className="user-sign-in">
          <img className="e-styles" src={ee}/>
          <p className="p-sign">Create an account.</p>
          <input className="input-1"
            type='text'
            id='username'
            placeholder='email:'
            ref={(input) => {this.email = input;}}/>
          <input className="input-2"
            type='password'
            id='password'
            placeholder='password:'
            ref={(input) => {this.password = input;}}/>
          <button className='login-button' type='submit'>sign up</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
