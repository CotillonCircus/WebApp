import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import HomeProducts from '../../components/HomeProducts/HomeProducts';

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <HomeProducts />
      <Footer />
    </div>
  );
};

export default Home;
