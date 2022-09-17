import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Confirmation from '../Confirmation/Confirmation';

const AuthForm = () => {
  const textAlert = 'Formulario enviado';

  let user = useSelector((state) => state.userLogged[0]);
  const [input, setInput] = useState({
    name: '',
    email: '',
    company: '',
    cuit: '',
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    let auth = {
      sub: user.sub,
      name: input.name,
      email: input.email,
      company: input.company,
      cuit: input.cuit,
    };
    console.log(auth);
    axios.post('http://localhost:3001/auth', auth);
    setInput({
      name: '',
      email: '',
      company: '',
      cuit: '',
    });
    Confirmation({ textAlert });
  };

  const validate = () => {};

  return (
    <form>
      <input
        type='text'
        name='name'
        value={input.name}
        placeholder='Nombre completo'
        required
        onChange={(e) => handleChange(e)}
      />
      <input
        type='email'
        name='email'
        value={input.email}
        placeholder='Email'
        required
        onChange={(e) => handleChange(e)}
      />
      <input
        type='text'
        name='company'
        value={input.company}
        placeholder='Compañia'
        required
        onChange={(e) => handleChange(e)}
      />
      <input
        type='text'
        name='cuit'
        value={input.cuit}
        placeholder='CUIT'
        required
        onChange={(e) => handleChange(e)}
      />
      <button
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

