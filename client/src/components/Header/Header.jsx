import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/actions';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';

const Header = () => {
  const { isAuthenticated, user } = useAuth0();
  const dispatch = useDispatch();
  const { userLogged } = useSelector((state) => state);

  useEffect(() => {
    user && user.sub && dispatch(getLogin(user));
  }, [dispatch, user]);

  return (
    <header>
      {isAuthenticated ? (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md'>Search</div>
            <div className='col-md'>Logo</div>
            <div className='col-md'>
              <LogOutButton> </LogOutButton>
              <p>{userLogged[0]?.name}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md'>Search</div>
            <div className='col-md'>Logo</div>
            <div className='col-md'>
              <LoginButton> </LoginButton>
              <span>{userLogged[0]?.name}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
