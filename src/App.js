import React, { useState } from 'react';
import UserForm from './components/UserForm';
import ListUsers from './components/ListUsers';
import Modal from './components/Modal';
import './App.css';

function App(props) {
  const [users, setUsers] = useState([
    { id: 'a1', name: 'Rex', age: 0 },
    { id: 'b2', name: 'Hamburglar', age: 1 },
    { id: 'c3', name: 'Dragon Fly Jones', age: 500 },
  ]);
  const [flag, setFlag] = useState(true);
  function addUserHandler(guy) {
    if (typeof guy === 'object') {
      console.log('guy')
      setFlag(true);
      setUsers(() => {
        return [guy, ...users];
      });
    }
  }

  function removeHandler(id) {
    const tmp = [];
    for (let idx = 0; idx < users.length; ++idx) {
      if (id !== users[idx].id) {
        tmp[tmp.length] = users[idx];
      }
    }
    setUsers(tmp);
  }

  let content = flag ? (
    <div className="app-div">
      <h2>{props.text}</h2>
      <UserForm addUser={addUserHandler} setFlag={setFlag} />
      <ListUsers remove={removeHandler} users={users} />
    </div>
  ) :
  (<Modal setFlag={setFlag}/>);
  //(<h1 onClick={() => setFlag(true)}>Stop screwing around</h1>);

  return {...content}

  /*
  return (
    <div className="app-div">
      <h2>{props.text}</h2>
      <UserForm addUser={addUserHandler} setFlag={setFlag} />
      <ListUsers remove={removeHandler} users={users} />
    </div>
  );
  */
}

export default App;
