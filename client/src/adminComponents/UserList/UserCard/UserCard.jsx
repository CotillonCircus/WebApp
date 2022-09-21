import axios from 'axios';
import React from 'react';
import style from './UserCard.module.css';
import { useDispatch } from 'react-redux';
import { changeUserStatus } from '../../../redux/actions';

export const UserCard = ({ sub, name, email, setFlag }) => {
  const dispatch = useDispatch();

  const handleClick = async (e) => {
    e.preventDefault();
    const user = await axios.post('http://localhost:3001/user', { sub });
    if (user.data[0].status === 'mayorista') {
      dispatch(changeUserStatus(sub, 'banned'));
    } else {
      dispatch(changeUserStatus(sub, 'mayorista'));
    }
    setFlag((prevFlag) => !prevFlag);
  };

  return (
    <div className={style.container}>
      <p>Nombre: {name}</p>
      <p>Email: {email}</p>
      <button onClick={(e) => handleClick(e)}>Bloquear/Desbloquear</button>
    </div>
  );
};
