import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import "./MAbout.css"

const MAbout = () => {
    return (
        <div>
          <Header section="minorist" />
          <Navbar section="minorist"/>
          <p className='p_about'>
            Somos una empresa dedicada a la comercialización de productos de
            cotillón y afines, focalizados en ofrecer una amplia gama de productos y
            en asesorar a nuestros clientes de la mejor manera posible, tanto en el
            canal minorista como en el mayorista.
          </p>
          <p className='p_about'>
            Nuestra empresa cuenta con más de 15 años de experiencia en el mercado,
            posicionándonos como líderes en el oeste del país.
          </p>
          <p className='p_about'>Somos CIRCUS. Hacemos tu vida más feliz!</p>
          <Footer section="minorist"/>
        </div>
      );
}

export default MAbout