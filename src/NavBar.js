import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar(){
  var navBox = {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "space-around",
    width: "100%",
  };

  var navStyles = {
    paddingRight: '8em',
  };

  return (
    <div>
      <ul style={navBox}>
        <li className="glitchy" style={navStyles}><Link to="/">home</Link></li>
        <li style={navStyles}>about</li>
        <li style={navStyles}>contact</li>
        <li style={navStyles}>archive</li>
        <li style={navStyles}>art</li>
        <li style={navStyles}><Link to="/LogInForm">log in</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
