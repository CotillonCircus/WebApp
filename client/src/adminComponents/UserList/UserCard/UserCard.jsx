import axios from 'axios';
import React from 'react';
import style from './UserCard.module.css';
import { useDispatch } from 'react-redux';
import { changeUserStatus } from '../../../redux/actions';
import { confirmAlert } from 'react-confirm-alert';

export const UserCard = ({ sub, name, email, setFlag }) => {
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();

    confirmAlert({
      title: 'Cambiara el estado del usuario  ' + name,
      message: '¿Está seguro?',
      buttons: [
        {
          label: 'Sí',
          onClick: async() => {
          const user = await axios.post('/user', { sub });
          if (user.data[0].status === 'mayorista') {
            dispatch(changeUserStatus(sub, 'banned'));
          } else {
            dispatch(changeUserStatus(sub, 'mayorista'));
          }
          setFlag((prevFlag) => !prevFlag);}
        },
        {
          label: 'No',
        },
      ],
    });

    
  };

  return (
    <div className={style.container}>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
      <button onClick={(e) => handleClick(e)}>Bloquear/Desbloquear</button>
    </div>
  );
};
