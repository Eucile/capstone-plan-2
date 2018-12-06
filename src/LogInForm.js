import React from 'react';
import './assets/styles/LogInForm.css';

class LogInForm extends React.Component{
  render() {
    return(
      <div className="LogInStyles">
      <form className="user-sign-in">
      <p>Sign into your account.</p>
          <input
            type='text'
            id='username'
            placeholder='username:'
            ref={(input) => {this.username = input;}}/>
          <input
            type='password'
            id='password'
            placeholder='password:'
            ref={(input) => {this.password = input;}}/>
        <button type='submit'>sign in</button>
      </form>
      </div>
    );
  }
}

export default LogInForm;
