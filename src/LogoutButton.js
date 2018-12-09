import React from "react";
import PropTypes from 'prop-types';

function LogoutButton(props){
  const logOut = () => {
    props.firebase.auth().signOut();
  }
  return (
    <div onClick={logOut}>
      LOG OUT
    </div>
  );
}

LogoutButton.propTypes = {
  firebase: PropTypes.object
};

export default LogoutButton;
