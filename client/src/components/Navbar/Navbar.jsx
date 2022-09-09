import React from 'react';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md bg-light'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'></a>
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
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#header'>
                Inicio
              </a>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#nav'
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
              <a className='nav-link' href='#'>
                Quienes Somos
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#footer'>
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
