import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import './about.css';

const About = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <p className='p_about'>
        Somos una empresa ubicada en la ciudad de Mendoza dedicada desde hace
        más de 10 años a la venta de artículos y productos de cotillón,
        repostería, golosinas y descartables.
      </p>
      <p className='p_about'>
        Las nuevas tecnologías nos permiten lograr estar cerca de nuestros
        clientes en cualquier momento, a través de nuestra tienda online.
      </p>
      <p className='p_about'>
        Nuestro objetivo principal es brindar soluciones prácticas e innovadoras
        y así hacer de todos sus eventos un momento especial y único.
      </p>
      <Footer />
    </div>
  );
};

export default About;
