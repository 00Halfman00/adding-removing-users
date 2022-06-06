import React, { useState } from 'react';
import UserForm from './components/UserForm';
import ListUsers from './components/ListUsers';
import Modal from './components/Modal';
import Overlay from './components/Overlay';
import './App.css';

function App(props) {
  const [users, setUsers] = useState([
    { id: 'a1', name: 'Rex', age: 10 },
    { id: 'b2', name: 'Hamburglar', age: 50 },
    { id: 'c3', name: 'Dragon Fly Jones', age: 500 },
  ]);
  const [redflag, setFlag] = useState(true);
  const [blueFlag, setBlueFlag] = useState(true);
  const [text, setText] = useState(props.text);

  function showForm(){
    setBlueFlag(!blueFlag);
    if(text === 'ADD USER'){
      setText('REMOVE FORM')
    } else setText(props.text)
  }

  function addUserHandler(guy) {
    if (typeof guy === 'object') {
      console.log('guy');
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

  let content = redflag ? (
    <div className="app-div">
      <h2 onClick={showForm} className="title">{text}</h2>
      {blueFlag ? '' : <UserForm addUser={addUserHandler} setFlag={setFlag} />}
      <ListUsers remove={removeHandler} users={users} />
    </div>
  ) : (
    <div>
      <Overlay setFlag={setFlag} />
      <Modal setFlag={setFlag} />
    </div>
  );

  return { ...content };

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
