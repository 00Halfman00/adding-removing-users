import React from 'react';
import './Modal.css';

function Modal(props){

  function changeFlag(){
    console.log('clicked')
    props.setFlag(true);
  }

  return (
    <div onClick={changeFlag} className='modal-container'>
      <div className='modal-div'>
        <h1>What are you  doing?</h1>
        <h1>Click to go back</h1>
        <h1>Type right</h1>
      </div>
    </div>
  )
}

export default Modal;
