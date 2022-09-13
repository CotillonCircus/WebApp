import React from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import './confirmation.css';

const Confirmation = ({ textAlert }) => {
  confirmAlert({
    customUI: ({ onClose }) => {
      return (
        <div className='alert__container'>
          <div className='title'>{textAlert}</div>
          <button className='btn btn_confirmation' onClick={onClose}>
            OK
          </button>
        </div>
      );
    },
  });
};

export default Confirmation;
