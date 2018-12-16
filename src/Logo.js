import React from "react";
import './assets/styles/Logo.css';
import logo from './assets/images/eucilelogo.png';

function Logo(){
  return (
    <div className="LogoStyles">
      <img className="logo-stretch" src={logo}/>
    </div>
  );
}

export default Logo;
