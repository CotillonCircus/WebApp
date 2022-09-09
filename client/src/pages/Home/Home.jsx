import React from 'react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import { useAuth0 } from '@auth0/auth0-react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/actions';

const Home = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const { userLogged } = useSelector((state) => state);

  useEffect(() => {
    user && user.sub && dispatch(getLogin(user));
  }, [dispatch, user]);

  return (
    <section id='home'>
      {isAuthenticated ? (
        <div>
          <LogOutButton> </LogOutButton>
          <span>{userLogged[0]?.name}</span>
          <Header />
          <Navbar />
          <div className='row'>
            <div className='col-lg'>Body</div>
          </div>
          <Footer />
        </div>
      ) : (
        <div>
          <LoginButton> </LoginButton>
          <Header />
          <Navbar />
          <div className='row'>
            <div className='col-lg'>Body</div>
          </div>
          <Footer />
        </div>
      )}
    </section>
  );
};

export default Home;
