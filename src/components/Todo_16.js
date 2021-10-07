import React, { useState } from 'react';
import Backdrop_16 from './Backdrop_16';
import Modal_16 from './Modal_16';

function Todo_16(props) {
  const [showModal, setShowModal] = useState();
  function showModalHandler() {
    setShowModal(true);
  }
  function closeModalHandler() {
    setShowModal(false);
  }
  return (
    <div>
      <div className='card'>
        <h2>{props.text}</h2>
        <div className='actions'>
          <button className='btn' onClick={showModalHandler}>
            Delete
          </button>
        </div>
      </div>
      {showModal && (
        <Modal_16 text='Are you sure??' onClose={closeModalHandler} />
      )}
      {showModal && <Backdrop_16 onClose={closeModalHandler} />}
    </div>
  );
}

export default Todo_16;
