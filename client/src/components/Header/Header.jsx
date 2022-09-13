import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Logo from '../../images/circus_cotillon_logo.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <header>
      {isAuthenticated ? (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md column_header'>Search</div>
            <div className='col-md'>
              <img src={Logo} className='d-block w-50 mx-auto' alt='logo' />
            </div>
            <div className='col-md column_header_log'>
              <div className='row_log1'>
                <LogOutButton> </LogOutButton>
              </div>
              <div className='row_log2'>
                <Link to={'/aform'} className='link'>
                  <a className='nav-link' href='#aform'>
                    Formulario
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md column_header'>Search</div>
            <div className='col-md'>
              {' '}
              <img src={Logo} className='d-block w-50 mx-auto' alt='logo' />
            </div>
            <div className='col-md column_header'>
              <LoginButton> </LoginButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
