import React from 'react';
import './Modal.css';

function Modal(props){

  function changeFlag(){
    console.log('clicked in modal')
    props.setFlag(true);
  }

  return (
    <div onClick={changeFlag} className='modal-container'>
      <div className='modal-div'>
        <p className='modal-p'>Enter name as text</p>
        <p className='modal-p'>Enter age as number > zero</p>
        <button className='modal-button' onClick={changeFlag}>go back</button>
      </div>
    </div>
  )
}

export default Modal;
