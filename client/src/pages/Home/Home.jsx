import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <section id='home'>
      {/* {isAuthenticated ? (
        <LogOutButton> */}
      <div>
        <Header />
        <Navbar />
        <div class='row'>
          <div class='col-lg'>Body</div>
        </div>
        <Footer />
      </div>
      {/* </LogOutButton>
      ) : (
        <LoginButton>
          <Header />
          <Navbar />
          <div class='row'>
            <div class='col-lg'>Body</div>
          </div>
          <Footer />
        </LoginButton>
      )} */}
    </section>
  );
};

export default Home;
