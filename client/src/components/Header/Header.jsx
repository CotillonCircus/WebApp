import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Logo from '../../images/circus_cotillon_logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos } from '../../redux/actions';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCLick = () => {
    const search = document.getElementById('search').value;
    dispatch(getProductos(search));
    navigate('/products');
  };

  return (
    <header>
      {isAuthenticated ? (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md column_header'>
              <div id='searchInput'>
                <input id='search' laceholder='search'></input>
                <button onClick={handleCLick}>search</button>
              </div>
            </div>
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
            <div id='searchInput'>
              <input id='search' laceholder='search'></input>
              <button onClick={handleCLick}>search</button>
            </div>
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
