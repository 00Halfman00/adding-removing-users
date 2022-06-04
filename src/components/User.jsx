import React from 'react';
import './User.css';

function User(props) {
  //console.log(props)
  function removeUser() {
    props.remove(props.id);
  }

  return <li onClick={removeUser}>{props.children}</li>;
}

export default User;
