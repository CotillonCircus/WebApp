import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header class='container-fluid text-center' className='container'>
      <div class='row' className='row_header'>
        <div class='col-lg-4' className='col1'>
          Search
        </div>
        <div class='col-lg-4' className='col2'>
          Logo
        </div>
        <div class='col-lg-4' className='col3'>
          Registrarse
        </div>
      </div>
    </header>
  );
};

export default Header;
