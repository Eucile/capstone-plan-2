import React from 'react';
import './assets/styles/LogInForm.css';
import ee from './assets/images/eucileglyph.png';

class LogInForm extends React.Component{
  render() {
    return(
      <div className="LogInStyles">
      <form className="user-sign-in">
      <img className="e-styles" src={ee}/>
      <p className="p-sign">Sign into your account.</p>
          <input className="input-1"
            type='text'
            id='username'
            placeholder='username:'
            ref={(input) => {this.username = input;}}/>
          <input className="input-2"
            type='password'
            id='password'
            placeholder='password:'
            ref={(input) => {this.password = input;}}/>
        <button className='login-button' type='submit'>sign in</button>
      </form>
      </div>
    );
  }
}

export default LogInForm;
