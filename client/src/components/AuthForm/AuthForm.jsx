import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Confirmation from '../Confirmation/Confirmation';

const AuthForm = () => {
  const textAlert = 'Formulario enviado';

  let user = useSelector((state) => state.userLogged[0]);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    name: '',
    email: '',
    company: '',
    cuit: '',
    razon_social: '',
    address: '',
  });

  function validate(input) {
    let errors = {};
    if (!input.name) errors.name = 'Se requiere un nombre';
    if (input.name.length > 50) errors.name = 'Máximo 50 caracteres';
    if (!input.email) errors.email = 'Se requiere un email';
    if (input.email.length > 50) errors.email = 'Máximo 50 caracteres';
    if (
      input.email &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input.email
      )
    )
      errors.email = 'El formato de email debe ser válido.';
    if (!input.company) errors.company = 'Se requiere un nombre de empresa';
    if (input.company.length > 50) errors.company = 'Máximo 50 caracteres';
    if (!input.cuit) errors.cuit = 'Se requiere una CUIT';
    if (input.cuit && !/^\d{2}-\d{8}-\d{1}$/.test(input.cuit))
      errors.cuit =
        'El formato de la CUIT debe ser válido. Ejemplo: 12-12345678-1';

    if (!input.razon_social)
      errors.razon_social = 'Se requiere una razón social';
    if (input.razon_social.length > 100)
      errors.razon_social = 'Máximo 100 caracteres';
    if (!input.address) errors.address = 'Se requiere un domicilio';
    if (input.address.length > 150) errors.address = 'Máximo 150 caracteres';
    return errors;
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let auth = {
      sub: user.sub,
      name: input.name,
      email: input.email,
      company: input.company,
      cuit: input.cuit,
      razon_social: input.razon_social,
      address: input.address,
    };

    axios.post('/auth', auth);
    setInput({
      name: '',
      email: '',
      company: '',
      cuit: '',
      razon_social: '',
      address: '',
    });
    Confirmation({ textAlert });
  };

  return (
    <form>
      <input
        type='text'
        name='name'
        value={input.name}
        placeholder='Nombre contacto'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.name && (
        <div className='error'>
          <span> {errors.name}</span>
        </div>
      )}
      <input
        type='email'
        name='email'
        value={input.email}
        placeholder='Email'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.email && (
        <div className='error'>
          <span> {errors.email}</span>
        </div>
      )}
      <input
        type='text'
        name='company'
        value={input.company}
        placeholder='Compañía'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.company && (
        <div className='error'>
          <span> {errors.company}</span>
        </div>
      )}
      <input
        type='text'
        name='cuit'
        value={input.cuit}
        placeholder='CUIT'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.cuit && (
        <div className='error'>
          <span> {errors.cuit}</span>
        </div>
      )}
      <input
        type='text'
        name='address'
        value={input.address}
        placeholder='Domicilio de entrega'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.address && (
        <div className='error'>
          <span> {errors.address}</span>
        </div>
      )}
      <input
        type='text'
        name='razon_social'
        value={input.razon_social}
        placeholder='Razón Social'
        required
        onChange={(e) => handleChange(e)}
      />
      {errors.razon_social && (
        <div className='error'>
          <span> {errors.razon_social}</span>
        </div>
      )}
      <button
        disabled={
          !input.name ||
          !input.email ||
          !input.company ||
          !input.cuit ||
          !input.razon_social ||
          !input.address ||
          errors.name ||
          errors.email ||
          errors.company ||
          errors.cuit ||
          errors.razon_social ||
          errors.address
        }
        type='submit'
        className='btn btn_form'
        onClick={(e) => handleSumbit(e)}
      >
        Solicitar
      </button>
    </form>
  );
};

export default AuthForm;
