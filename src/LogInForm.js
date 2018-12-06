import React from 'react';

class LogInForm extends React.Component{
  render() {
    var LogInStyles = {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      height: '50vh',
      margin: '3em 0',
    };
    return(
      <div style={LogInStyles}>
      <style jsx>{`
        input, textarea {
          height: auto;
          color: white;
          background: black;
          border-top: hidden;
          border-right: hidden;
          border-left: hidden;
          border-bottom: 1px solid #8c8c8c;
          padding: 10px 0px 7px 10px;
          margin: 1em 0;
          font-size: .75em;
          line-height: 1;
          font-weight: 700;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        button {
          margin-top: 2em;
          color: #262626;
          text-decoration: none;
          border: none;
          border-radius: 25px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: .2em;
        }
        button:hover {
          opacity: 0.6;
          color: white;
          background: black;
          transition: 0.7s;
        }
        p {
          line-height: 1;
          letter-spacing: .1em;
        }
        .user-sign-in {
          display: flex;
          justify-content: center;
          flex-flow: column nowrap;
          padding: 3em;
          margin: 0 auto;
          background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.4)), to(rgba(0,0,0,0.2)), color-stop(.4, #696969));
        }
      `}</style>
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
