import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ProductsCards from '../../components/productsCards/ProductsCards';

const Products = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductsCards/>
      <Footer />
    </div>
  )
}

export default Products