import React from 'react'
import AuthForm from '../../components/AuthForm/AuthForm';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';


const AForm = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <AuthForm/>
      <Footer />
    </div>
  )
}

export default AForm