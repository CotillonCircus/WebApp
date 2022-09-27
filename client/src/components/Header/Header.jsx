import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Logo from '../../images/circus_cotillon_logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos,getAllProductos } from '../../redux/actions';
import Cart from '../Cart/Cart';
import Confirmation from '../../components/Confirmation/Confirmation';
import { changeUserStatus } from '../../redux/actions';
import { useEffect } from 'react';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getAllProductos())
  },[dispatch])

  const textAlert = 'Usted se ha dado de baja';

  const handleDown = (e) => {
    e.preventDefault();
    dispatch(changeUserStatus(user.sub, ''));
    Confirmation({ textAlert });
  };


  const handleCLick = () => {
    const search = document.getElementById('search').value;
    dispatch(getProductos({ name: search }));
    navigate('/products');
  };
  const user = useSelector((state) => state.userLogged[0]);

  return (
    <header>
      {isAuthenticated ? (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-md-3 column_header'>
              <div id='searchInput'>
                <input id='search' placeholder='Buscar...'></input>
                <button onClick={handleCLick}></button>
              </div>
            </div>
            <div className='col-md-6 logo'>
              <img src={Logo} className='d-block w-50 mx-auto' alt='logo' />
            </div>
            <div className='col-md-2'>
              <div className='btn-group'>
                <button
                  type='button'
                  className='btn btn-secondary dropdown-toggle'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Menú
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <LogOutButton> </LogOutButton>
                  </li>
                  <li>
                    <Link to={'/aform'} className='link'>
                      <span className='nav-link' href='#aform'>
                        Formulario
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to={'/myOrders'} className='link'>
                      <span className='nav-link' href='#aform'>
                        Mis compras
                      </span>
                    </Link>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <div className='row_log2'>
                      <span className='nav-link' href='#aform'>
                        <button onClick={(e) => handleDown(e)}>
                          Darme de baja
                        </button>
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* <div className='row_log1'>
                <LogOutButton> </LogOutButton>
              </div>
              <div className='row_log2'>
                <Link to={'/aform'} className='link'>
                  <span className='nav-link' href='#aform'>
                    Formulario
                  </span>
                </Link>
              </div>

              <div className='row_log3'>
                <Link to={'/myOrders'} className='link'>
                  <span className='nav-link' href='#aform'>
                    Mis compras
                  </span>
                </Link>
              </div>
            </div> */}
            <div className='col-md-1 c4'>
              <Cart />
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
