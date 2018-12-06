import React from "react";

function Footer(){
  var FooterStyles = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    justifyContent: "space-around",
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '.5em',
    fontSize: '1em',
    borderTop: '1px solid #d9d9d9',
  };

  var pStyles = {
    color: '#8c8c8c',
  };

  return (
    <div style={FooterStyles}>
      <p style={pStyles}>::..::</p>
    </div>
  );
}

export default Footer;
