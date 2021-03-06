import React from 'react';
import './assets/styles/UserDashboard.css';
import logo from './assets/images/eucilelogo.png';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';

class UserDashboard extends React.Component{
  render() {
    return(
      <div className="user-backdrop">
        <img className ="logo-styles" src={logo}/>
        <div className="dash-tab dash-tab-welcome">{this.props.user && this.props.user.email}</div>
        <div className="dash-tab dash-tab-1"><Link to="/new"><span className="black">NEW POST</span></Link></div>
        <div className="dash-tab dash-tab-2"><Link to="/my-stuff"><span className="black">MY STUFF</span></Link></div>
        <div className="dash-tab dash-tab-3"><Link className="hover" to="/"><span className="black">BLOG HOME</span></Link></div>
        <div className="dash-tab dash-tab-4"><LogoutButton firebase={this.props.firebase}/></div>
      </div>
    );
  }
}

export default UserDashboard;
