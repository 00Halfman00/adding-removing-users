import React from 'react';
import styles from './Overlay.module.css';

function Overlay(props) {
  function flagHandler() {
    props.setFlag(false);
  }

  return <div onClick={flagHandler} className={styles['overlay']}></div>;
}

export default Overlay;
