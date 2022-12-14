import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Logo from '../../images/circus_cotillon_logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos, getAllProductos } from '../../redux/actions';
import Cart from '../Cart/Cart';
import { changeUserStatus } from '../../redux/actions';
import { useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';

const Header = ({ section }) => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllProductos());
  }, [dispatch]);

  const handleDown = (e) => {
    e.preventDefault();
    dispatch(changeUserStatus(user.sub, ''));
  };

  const handleCLick = () => {
    const search = document.getElementById('searchheader').value;
    dispatch(getProductos({ name: search }));
    navigate('/products');
  };
  const user = useSelector((state) => state.userLogged[0]);

  const confirmChange = (e) => {
    confirmAlert({
      title: 'Se dará de baja como usuario',
      message: '¿Está seguro?',
      buttons: [
        {
          label: 'Sí',
          onClick: () => handleDown(e),
        },
        {
          label: 'No',
        },
      ],
    });
  };

  return (
    <header>
      {isAuthenticated ? (
        <div className='container-fluid text-center'>
          <div className='row'>
            <div className='col-lg-3 column_header'>
              <div id='searchInput'>
                <input id='searchheader' placeholder='Buscar...'></input>
                <button
                  onClick={handleCLick}
                  type='button'
                  className='btn btn-secondary'
                >
                  Ir
                </button>
              </div>
            </div>
            <div className='col-lg-6 logo'>
              <Link to={'/home'}>
                <img
                  src={Logo}
                  className='d-block w-50 mx-auto homelink'
                  alt='logo'
                />
              </Link>
            </div>
            <div className='col-lg-2'>
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
                  {user?.status !== 'admin' ? (
                    <li>
                      <Link to={'/aform'} className='ddlink'>
                        <span className='nav-link' href='#aform'>
                          Formulario
                        </span>
                      </Link>
                    </li>
                  ) : null}
                  <li>
                    {user ? (
                      user.status === 'mayorista' ? (
                        <Link to={'/myOrders'} className='ddlink'>
                          <span className='nav-link' href='#aform'>
                            Mis compras
                          </span>
                        </Link>
                      ) : null
                    ) : null}
                  </li>
                  <li>
                    <span
                      className='ddlink nav-link'
                      onClick={(e) => confirmChange(e)}
                    >
                      Darme de baja
                    </span>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <LogOutButton> </LogOutButton>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-lg-1 cartinheader'>
              <Cart />
            </div>
          </div>
        </div>
      ) : (
        <div className='container-fluid text-center'>
          <div className='row'>
            {section !== 'minorist' ? (
              <div className='col-lg-3 column_header'>
                <div id='searchInput'>
                  <input id='searchheader' placeholder='Buscar...'></input>
                  <button
                    onClick={handleCLick}
                    type='button'
                    className='btn btn-secondary'
                  >
                    Ir
                  </button>
                </div>
              </div>
            ) : (
              <div className='col-lg-3 column_header'></div>
            )}
            <div className='col-lg-6'>
              <Link to={'/home'}>
                <img
                  src={Logo}
                  className='d-block w-50 mx-auto homelink'
                  alt='logo'
                />
              </Link>
            </div>
            {section !== 'minorist' ? (
              <div className='col-lg-3 column_header loginbutton'>
                <LoginButton> </LoginButton>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
