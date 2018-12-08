import React from "react";
import { Link } from 'react-router-dom';
import './assets/styles/glitch.css';
import './assets/styles/NavBar.css';

function NavBar(){

  return (
    <div>
      <ul className="navBox">
        <li><Link to="/"><span className="navStyles">home</span></Link></li>
        <li className="navStyles">about</li>
        <li className="navStyles">contact</li>
        <li className="navStyles">archive</li>
        <li className="navStyles">art</li>
        <li><Link to="/login"><span className="navStyles">log in</span></Link></li>
        <li><Link to="user"><img className="user-icon" src="https://cdn3.iconfinder.com/data/icons/trico-circles-solid/24/Circle-Solid-Profile-512.png"/></Link></li>
      </ul>
    </div>
  );
}

export default NavBar;
