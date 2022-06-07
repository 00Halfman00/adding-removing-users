import React from 'react';
import styles from './Modal.module.css';

function Modal(props) {
  function changeFlag() {
    props.setFlag(false);
  }

  return (
    <div onClick={changeFlag} className={styles['modal-container']}>
      <div className={styles['modal-div']}>
        <header className={styles['modal-header']}>
          <h2 className={styles['modal-h2']}> Invalid input</h2>
        </header>
        <p className={styles['modal-p']}>{props.error}</p>
        <button className={styles['modal-button']} onClick={changeFlag}>
          go back
        </button>
      </div>
    </div>
  );
}

export default Modal;
