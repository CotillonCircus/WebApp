import React from 'react';
import './header.css';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/LoginButton/LoginButton';
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import Logo from '../../images/circus_cotillon_logo.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductos,getAllProductos } from '../../redux/actions';
import Confirmation from '../Confirmation/Confirmation';
import { changeUserStatus } from '../../redux/actions';
import { useEffect } from 'react';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(getAllProductos())
  },[dispatch])

  const handleCLick = () => {
    const search = document.getElementById('search').value;
    dispatch(getProductos({ name: search }));
    navigate('/products');
  };
  const user = useSelector((state)=>state.userLogged[0]);

  const textAlert = 'Usted se ha dado de baja';

  const handleDown = (e)=>{
        e.preventDefault();
        dispatch(changeUserStatus(user.sub,""));
        Confirmation({ textAlert });
  }

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
                  <span className='nav-link' href='#aform'>
                    Formulario
                  </span>
                </Link>
              </div>
              <div className='row_log2'>
                  <span className='nav-link' href='#aform'>
                    <button onClick={(e)=>handleDown(e)}>Darme de baja</button>
                  </span>
              </div>
              <div className='row_log2'>
                <Link to={'/myOrders'} className='link'>
                  <span className='nav-link' href='#aform'>
                    Mis compras
                  </span>
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
