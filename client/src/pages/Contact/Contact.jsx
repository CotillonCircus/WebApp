import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Mapa from '../../components/Mapa/Mapa';
import Navbar from '../../components/Navbar/Navbar';

const Contact = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ContactForm />
      <Mapa />
      <Footer />
    </div>
  );
};

export default Contact;
