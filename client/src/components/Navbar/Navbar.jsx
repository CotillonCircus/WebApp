import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

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
              <li className='nav-item'>
                <Link to={'/home'} className='link'>
                  <a
                    className='nav-link'
                    aria-current='page'
                    href='#home'
                    id='as'
                  >
                    Inicio
                  </a>
                </Link>
              </li>

              <li className='nav-item dropdown'>
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
                  <li>
                    <a className='dropdown-item' href='#'>
                      Globos
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Cortinas
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Banderines
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='link'>
                  <a className='nav-link' href='#about'>
                    Quienes Somos
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contact'} className='link'>
                  <a className='nav-link' href='#contact'>
                    Contacto
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/admin'} className='link'>
                  <a className='nav-link' href='#admin'>
                    Dashboard Admin
                  </a>
                </Link>
              </li>
            </ul>
          ) : (
            <ul className='navbar-nav gap-4 mx-auto'>
              <li className='nav-item'>
                <Link to={'/home'} className='link'>
                  <a
                    className='nav-link active'
                    aria-current='page'
                    href='#header'
                    id='as'
                  >
                    Inicio
                  </a>
                </Link>
              </li>

              <li className='nav-item dropdown'>
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
                  <li>
                    <a className='dropdown-item' href='#'>
                      Globos
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Cortinas
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Banderines
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='link'>
                  <a className='nav-link' href='#about'>
                    Quienes Somos
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contact'} className='link'>
                  <a className='nav-link' href='#contact'>
                    Contacto
                  </a>
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
