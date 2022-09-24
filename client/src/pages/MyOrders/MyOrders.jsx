import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Orders from '../../components/Orders/Orders';

const MyOrders = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Orders/>
      <Footer />
    </div>
  )
}

export default MyOrders