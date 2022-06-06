import React from 'react';
import './Overlay.css';

function Overlay(props) {

  function flagHandler(){
    console.log('clicked in overlay')
    props.setFlag(true)
  }

  return <div onClick={flagHandler} className='overlay'></div>;
}

export default Overlay;
