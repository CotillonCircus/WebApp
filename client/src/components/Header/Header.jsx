import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className='container-fluid text-center container'>
      <div className='row row_header'>
        <div className='col-lg-4 col1'>Search</div>
        <div className='col-lg-4 col2'>Logo</div>
        <div className='col-lg-4 col3'>Registrarse</div>
      </div>
    </header>
  );
};

export default Header;
