import React from 'react';
import './assets/styles/UserDashboard.css';
import { Link } from 'react-router-dom';


class UserDashboard extends React.Component{
  render() {
    return(
      <div className="user-backdrop">
        <div className="dash-tab dash-tab-1"><Link to="/new"><span className="black">NEW POST</span></Link></div>
        <div className="dash-tab dash-tab-2"><span className="black">MY STUFF</span></div>
        <div className="dash-tab dash-tab-3"><Link to="/"><span className="black">BLOG HOME</span></Link></div>
        <div className="dash-tab dash-tab-4">LOG OUT</div>
      </div>
    );
  }
}

export default UserDashboard;
