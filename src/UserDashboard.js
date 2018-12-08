import React from 'react';
import './assets/styles/UserDashboard.css';
import { Link } from 'react-router-dom';


class UserDashboard extends React.Component{
  render() {
    return(
      <div>
        <div className="LogInStyles">
          <div className="user-backdrop">Welcome, User</div>
        </div>
        <div className="dash-styles">
          <button className="dash-button"><Link to="/new"><span className="dash-button">new post</span></Link></button>
        </div>
      </div>
    );
  }
}

export default UserDashboard;
