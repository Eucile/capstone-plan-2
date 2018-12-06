import React from "react";
import NavBar from "./NavBar";

function Header(){
  var HeaderStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  };
  return (
    <div style={HeaderStyles}>
      <NavBar/>
    </div>
  );
}

export default Header;
