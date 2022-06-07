import React from 'react';
import User from './User';
import styles from './ListUsers.module.css';

function ListUsers(props) {
  return (
    <ul className={styles['list-users-ul']}>
      <h3 className={styles['users-title']}>Users: </h3>
      {props.users.map((user) => (
        <User
          remove={props.remove}
          key={user.id}
          id={user.id}
          name={user.name}
          age={user.age}
        >
          <p>
            {user.name} is {user.age} year old.
          </p>
        </User>
      ))}
    </ul>
  );
}

export default ListUsers;
