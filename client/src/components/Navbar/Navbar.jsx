import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs, getProductos } from '../../redux/actions';

const Navbar = ({ section }) => {
  const { isAuthenticated } = useAuth0();
  const { catalogs } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.userLogged[0]);

  const handleClick = (e) => {
    dispatch(getProductos({ catalogId: e.target.value }));
    navigate('/');
    navigate('/products');
  };

  useEffect(() => {
    dispatch(getCatalogs());
  }, [dispatch]);

  return (
    <nav className='navbar navbar-expand-md bg-light'>
      <div className='container-fluid'>
        {/* <a className='navbar-brand' href='#home'></a> */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavDropdown'
          aria-controls='navbarNavDropdown'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavDropdown'>
          {isAuthenticated ? (
            <ul className='navbar-nav gap-4 mx-auto'>
              <li
                id={
                  window.location.pathname.includes('home')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link to={'/home'} className='link'>
                  <span className='nav-link' aria-current='page' id='as'>
                    Inicio
                  </span>
                </Link>
              </li>
              <li
                id={
                  window.location.pathname.includes('products')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item dropdown'
              >
                <a
                  className='nav-link dropdown-toggle'
                  href='#products'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Productos
                </a>
                <ul className='dropdown-menu'>
                  {Array.isArray(catalogs)?catalogs.map((c) => {
                    return (
                      <li
                        className='dropdown-item'
                        onClick={handleClick}
                        value={c.id}
                        key={'li' + c.id}
                      >
                        {c.name}
                      </li>
                    );
                  }):null}
                </ul>
              </li>
              <li
                id={
                  window.location.pathname.includes('about')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link to='/about' className='link'>
                  <span className='nav-link'>Quienes Somos</span>
                </Link>
              </li>
              <li
                id={
                  window.location.pathname.includes('contact')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link to={'/contact'} className='link'>
                  <span className='nav-link'>Contacto</span>
                </Link>
              </li>
              {user ? (
                user.status === 'admin' ? (
                  <li
                    id={
                      window.location.pathname.includes('admin')
                        ? 'currentLinkNavbar'
                        : ''
                    }
                    className='nav-item'
                  >
                    <Link to={'/admin'} className='link'>
                      <span className='nav-link'>Dashboard Admin</span>
                    </Link>
                  </li>
                ) : null
              ) : null}
            </ul>
          ) : (
            <ul className='navbar-nav gap-4 mx-auto'>
              <li
                id={
                  window.location.pathname.includes('home')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link
                  to={section === 'minorist' ? '/m/home' : '/home'}
                  className='link'
                >
                  <span className='nav-link active' aria-current='page' id='as'>
                    Inicio
                  </span>
                </Link>
              </li>

              {section !== 'minorist' ? (
                <li
                  id={
                    window.location.pathname.includes('products')
                      ? 'currentLinkNavbar'
                      : ''
                  }
                  className='nav-item dropdown'
                >
                  <a
                    className='nav-link dropdown-toggle'
                    href='#products'
                    role='button'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Productos
                  </a>
                  <ul className='dropdown-menu'>
                    {catalogs?.map((c) => {
                      return (
                        <li
                          className='dropdown-item'
                          onClick={handleClick}
                          value={c.id}
                          key={'li2' + c.id}
                        >
                          {c.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ) : null}
              <li
                id={
                  window.location.pathname.includes('about')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link
                  to={section === 'minorist' ? '/m/about' : '/about'}
                  className='link'
                >
                  <span className='nav-link'>Quienes Somos</span>
                </Link>
              </li>
              <li
                id={
                  window.location.pathname.includes('contact')
                    ? 'currentLinkNavbar'
                    : ''
                }
                className='nav-item'
              >
                <Link
                  to={section === 'minorist' ? '/m/contact' : '/contact'}
                  className='link'
                >
                  <span className='nav-link'>Contacto</span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
