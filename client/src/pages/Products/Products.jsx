import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import ProductsCards from '../../components/productsCards/ProductsCards';
import './products.css';

const Products = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <ProductsCards />
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default Products;
