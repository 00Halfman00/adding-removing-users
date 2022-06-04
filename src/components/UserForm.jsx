import React, { useState, useRef } from 'react';
import './UserForm.css';

function UserForm(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function handleChange(ev) {
    setName(ev.target.value);
  }

  function handleAge(ev) {
    setAge(ev.target.value);
  }

  function addPersonHandler(ev) {
    console.log('clicked');
    ev.preventDefault(); // this is a problem if you don't write this line here
    const tmp1 = name;
    const tmp2 = age;
    if (name && age) {
      nameInputRef.current.value = '';
      ageInputRef.current.value = '';
      setName('');
      setAge('');
      props.addUser({
        id: `${Math.floor(Math.random() * 10000)}`,
        name: tmp1,
        age: tmp2,
      });
    }
    if(!name || !age){
      props.setFlag(false);
    }
  }

  return (
    <div className="div-form">
      <form onSubmit={addPersonHandler} className="form-container">
        <label className="form-label">name</label>
        <input
          ref={nameInputRef}
          onChange={handleChange}
          className="form-input"
          placeholder="..."
        ></input>
        <label className="form-label">age</label>
        <input
          ref={ageInputRef}
          onChange={handleAge}
          className="form-input"
          placeholder="..."
        ></input>
        <button className="form-button">add user</button>
      </form>
    </div>
  );
}

export default UserForm;

/*
function addNameHandler(ev) {
    console.log('clicked')
    ev.preventDefault(); // this is a problem if you don't write this line here
    const tmp = name;
    if (name) {
      inputRef.current.value = '';
      setName('');
      return props.addUser(tmp);
    }
  }
*/
