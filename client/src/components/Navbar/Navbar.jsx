import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs, getProductos } from '../../redux/actions';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  const {catalogs} = useSelector(state=>state)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(()=>{
    dispatch(getCatalogs())
  },[dispatch])

  const handleClick = (e)=>{
    dispatch(getProductos({catalogId:e.target.value}))
    navigate("/")
    navigate("/products")
  }

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
          {isAuthenticated ? (
            <ul className='navbar-nav gap-4 mx-auto'>
              <li className='nav-item'>
                <Link to={'/home'} className='link'>
                  <a
                    className='nav-link'
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
                  href='#nav'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Productos
                </a>
                <ul className='dropdown-menu'>
                  {
                    catalogs?.map((c)=>{
                      console.log(c)
                      return(
                        <li className='dropdown-item' onClick={handleClick} value={c.id}>
                          {c.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='link'>
                  <a className='nav-link' href='#'>
                    Quienes Somos
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contact'} className='link'>
                  <a className='nav-link' href='#footer'>
                    Contacto
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/admin'} className='link'>
                  <a className='nav-link' href='#footer'>
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
                  href='#nav'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Productos
                </a>
                <ul className='dropdown-menu'>
                {
                    catalogs?.map((c)=>{
                      console.log(c)
                      return(
                        <li className='dropdown-item' onClick={handleClick} value={c.id}>
                          {c.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </li>
              <li className='nav-item'>
                <Link to='/about' className='link'>
                  <a className='nav-link' href='#'>
                    Quienes Somos
                  </a>
                </Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contact'} className='link'>
                  <a className='nav-link' href='#footer'>
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
