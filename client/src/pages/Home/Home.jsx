import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Carousel from '../../components/Carousel/Carousel';
import HomeProducts from '../../components/HomeProducts/HomeProducts';
import { useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Home = () => {

  const {isAuthenticated} = useAuth0();

  const navigate = useNavigate();
  useEffect(()=>{
    if(isAuthenticated){
      let path = localStorage.getItem("pathname")
      if(path){
        localStorage.removeItem("pathname")
        navigate(path)
      }
    }
    // eslint-disable-next-line
  },[isAuthenticated])

  return (
    <div>
      <Header/>
      <Navbar/>
      <Carousel/>
      <HomeProducts/>
      <Footer />
    </div>
  );
};

export default Home;
