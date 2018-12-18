import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import './assets/styles/LogInForm.css';
import ee from './assets/images/eucileglyph.png';

class LogInForm extends React.Component{

  handleLogin = (event) => {
    event.preventDefault();
    this.props.firebase.auth().signInWithEmailAndPassword(this.email.value, this.password.value).then(console.log('login')).catch(function(error) {
      alert('nope');
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }

  render() {
    if(this.props.user) {
      return (<div><Redirect to='/user' /></div>)
    }
    return(
      <div className="LogInStyles">
        <form onSubmit={this.handleLogin} className="user-sign-in">
          <img className="e-styles" src={ee}/>
          <p className="p-sign">Sign into your account.</p>
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
          <button className='login-button' type='submit'>log in</button>
          <p className="or">— OR —</p>
          <button className='signup-button' type='submit'><Link to="/signup">sign up</Link></button>
        </form>
      </div>
    );
  }
}

export default LogInForm;
