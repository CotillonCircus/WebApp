import React from 'react';
import { useRef } from 'react';
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
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type='text' name='nombre' placeholder='Nombre completo' required />
      <input type='email' name='email' placeholder='Email' required />
      <textarea
        name='mensaje'
        rows='7'
        placeholder='Mensaje'
        required
      ></textarea>
      <button type='submit' className='btn btn_form'>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
