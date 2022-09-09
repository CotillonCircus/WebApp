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
    <header className='container-fluid text-center container'>
      <div className='row row_header'>
        {isAuthenticated ? (
          <div>
            <div className='col-md-4 col1'>Search</div>
            <div className='col-md-4 col2'>Logo</div>
            <div className='col-md-4 col3'>
              <LogOutButton> </LogOutButton>
              <span>{userLogged[0]?.name}</span>
            </div>
          </div>
        ) : (
          <div>
            <div className='col-md-4 col1'>Search</div>
            <div className='col-md-4 col2'>Logo</div>
            <div className='col-md-4 col3'>
              <LoginButton> </LoginButton>
              <span>{userLogged[0]?.name}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
