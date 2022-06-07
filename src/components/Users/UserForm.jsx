import React, { useState, useRef } from 'react';
import styles from './UserForm.module.css';

function UserForm(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  function handleChange(ev) {
    console.log(typeof ev.target.value)
    setName(ev.target.value);
  }

  function handleAge(ev) {
    setAge(+ev.target.value);
  }

  function addPersonHandler(ev) {
    ev.preventDefault(); // this is a problem if you don't write this line here
    const tmp1 = name;
    const tmp2 = age;
    console.log(age);
    if ((name && age) && (age > 0)) {
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
    if (!name || !age || age < 1) {
      props.setFlag(null);
    }
  }

  return (
    <form onSubmit={addPersonHandler} className={styles["form-container"]}>
      <label className={styles["form-label"]}>name</label>
      <input type='text'
        ref={nameInputRef}
        onChange={handleChange}
        className={styles["form-input"]}
        placeholder="..."
      ></input>
      <label className={styles["form-label"]}>age</label>
      <input type='number'
        ref={ageInputRef}
        onChange={handleAge}
        className={styles["form-input"]}
        placeholder="..."
      ></input>
      <div className={styles['form-button-div']}>
        <button type='submit' className={styles["form-button"]}>add user</button>
      </div>
    </form>
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