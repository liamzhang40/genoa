import React from 'react';
import Portal from './portal';
import './modal.scss';

const Modal = ({ children, closeModal }) => {
  return (
    <Portal>
      <div className="App-overlay" onClick={closeModal}>
        <div className="App-modal-container" onClick={e => e.stopPropagation()}>
          <button className="App-close" onClick={closeModal}>X</button>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default Modal;