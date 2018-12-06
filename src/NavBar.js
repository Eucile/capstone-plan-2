import React from "react";
import { Link } from 'react-router-dom';
import './glitch.css';
import './assets/styles/NavBar.css';

function NavBar(){

  return (
    <div>
      <ul className="navBox">
        <li className="navStyles"><Link to="/">home</Link></li>
        <li className="navStyles">about</li>
        <li className="navStyles">contact</li>
        <li className="navStyles">archive</li>
        <li className="navStyles">art</li>
        <li className="navStyles"><Link to="/LogInForm">log in</Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
