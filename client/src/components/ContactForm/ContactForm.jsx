import React from 'react';
import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import Confirmation from '../Confirmation/Confirmation';
import './contactform.css';

const ContactForm = () => {
  const form = useRef();

  const textAlert = 'Mensaje enviado';

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_lcodarh',
        'template_qefnza9',
        form.current,
        'O4XF5Cx0OvIHPShgk'
      )
      .then(
        (result) => {
          Confirmation({ textAlert });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setInput({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  const [input, setInput] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (input.nombre || input.email || input.mensaje) {
      setErrors(
        validate({
          nombre: input.nombre,
          email: input.email,
          mensaje: input.mensaje,
        })
      );
    }
    // eslint-disable-next-line
  }, []);

  function validate(input) {
    let errors = {};
    if (!input.nombre) errors.nombre = 'Se requiere un nombre';
    if (input.nombre.length > 50) errors.nombre = 'Máximo 50 caracteres';
    if (!input.email) errors.email = 'Se requiere un email';
    if (input.email.length > 50) errors.email = 'Máximo 50 caracteres';
    if (
      input.email &&
      !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        input.email
      )
    )
      errors.email = 'El formato de email debe ser válido.';
    if (!input.mensaje)
      errors.mensaje = 'Se requiere una consulta, sugerencia o reclamo';
    if (input.mensaje.length > 1000)
      errors.title = 'La consulta debe tener un máximo de 1000 caracteres';

    return errors;
  }

  function handleChange(e) {
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
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input
        type='text'
        name='nombre'
        value={input.nombre}
        placeholder='Nombre completo'
        onChange={handleChange}
      />
      {errors.nombre && (
        <div className='error'>
          <span> {errors.nombre}</span>
        </div>
      )}
      <input
        type='email'
        name='email'
        value={input.email}
        placeholder='Email'
        onChange={handleChange}
      />
      {errors.email && (
        <div className='error'>
          <span> {errors.email}</span>
        </div>
      )}
      <textarea
        name='mensaje'
        rows='7'
        value={input.mensaje}
        placeholder='Mensaje'
        onChange={handleChange}
      ></textarea>
      {errors.mensaje && (
        <div className='error'>
          <span> {errors.mensaje}</span>
        </div>
      )}

      <button
        disabled={
          !input.nombre ||
          !input.email ||
          !input.mensaje ||
          errors.nombre ||
          errors.email ||
          errors.mensaje
        }
        type='submit'
        className='btn btn_form'
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
