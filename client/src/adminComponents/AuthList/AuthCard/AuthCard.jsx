import React from 'react';
import styles from './AuthCard.module.css';
import { useDispatch } from 'react-redux';
import { changeUserStatus } from '../../../redux/actions';
import axios from 'axios';

const AuthCard = ({
  id,
  sub,
  name,
  email,
  company,
  cuit,
  address,
  razon_social,
  setAuthFlag,
}) => {
  const dispatch = useDispatch();

  const authorize = (e) => {
    e.preventDefault();
    dispatch(changeUserStatus(sub, 'mayorista'));
    axios
      .delete('http://localhost:3001/auth', { data: { id } })
      .then((res) => console.log('Usuario autorizado'));
    setAuthFlag((prevFlag) => !prevFlag);
  };

  const deny = (e) => {
    e.preventDefault();
    dispatch(changeUserStatus(sub, 'unauthorized'));
    axios
      .delete('http://localhost:3001/auth', { data: { id } })
      .then((res) => console.log('Usuario denegado'));
    setAuthFlag((prevFlag) => !prevFlag);
  };

  return (
    <div className={styles.authCardContainer}>
      <p>ID Usuario: {sub}</p>
      <p>Nombre de contacto: {name}</p>
      <p>Email: {email}</p>
      <p>Companía: {company}</p>
      <p>Cuit: {cuit}</p>
      <p>Domicilio de entrega: {address}</p>
      <p>Razón social: {razon_social}</p>
      <div className={styles.buttonsContainer}>
        <button onClick={(e) => authorize(e)}>Autorizar</button>
        <button onClick={(e) => deny(e)}>Denegar</button>
      </div>
    </div>
  );
};

export default AuthCard;
