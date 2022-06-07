import React from 'react';
import styles from './User.module.css';

function User(props) {
  function removeUser() {
    props.remove(props.id);
  }

  return <li className={styles['user-li']} onClick={removeUser}>{props.children}</li>;
}

export default User;
