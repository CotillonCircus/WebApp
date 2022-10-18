import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();
  useEffect(()=>{
    let path = localStorage.getItem("pathname")
    if(path){
      navigate(path)
      localStorage.removeItem("pathname")
    }
  },[])

  return (
    <div>
      <Header />
      <Navbar />
      <Carousel />
      <HomeProducts/>
      <Footer />
    </div>
  );
};

export default Home;
