import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import Mapa from '../../components/Mapa/Mapa'
import ContactForm from '../../components/ContactForm/ContactForm'

const MContact = () => {
  return (
    <div>
      <Header section="minorist" />
      <Navbar section="minorist"/>
      <ContactForm />
      <Mapa />
      <Footer section="minorist"/>
    </div>
  )
}

export default MContact