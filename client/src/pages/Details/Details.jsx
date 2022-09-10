import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import DetailsProduct from "../../components/DetailsProduct/DetailsProduct"

const Details = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <DetailsProduct />
      <Footer />
    </div>
  )
}

export default Details