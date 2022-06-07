import React from 'react';
import styles from './Modal.module.css';

function Modal(props){

  function changeFlag(){
    props.setFlag(true);
  }

  return (
    <div onClick={changeFlag} className={styles['modal-container']}>
      <div className={styles['modal-div']}>
        <p className={styles['modal-p']}>Enter name as text</p>
        <p className={styles['modal-p']}>Enter age as number integer</p>
        <button className={styles['modal-button']} onClick={changeFlag}>go back</button>
      </div>
    </div>
  )
}

export default Modal;
