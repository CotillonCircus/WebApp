import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import "./Admin.css"
import { useState } from 'react';

const Admin = () => {
  const user = useSelector((state) => state.userLogged[0]);
  const [selected,setSelected] = useState("")

  const changeLinkSelected = (e)=>{
    setSelected(e.target.name)
  }

  return (
    <div>
      <Header />
      <Navbar />
      {/* {user ? (
        user.status === 'admin' ? ( */}
          <div>
            <nav className='navbar navbar-expand-lg bg-light'>
              <div className='bg-light container-fluid'>
                <button
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#routesLinksAdmin'
                  aria-controls='routesLinksAdmin'
                  aria-expanded='false'
                  aria-label='Toggle navigation'
                >
                  <span className='navbar-toggler-icon'></span>
                </button>
                <div id="routesLinksAdmin" className='collapse navbar-collapse'>
                  <ul className='navbar-nav gap-4 mx-auto'>
                    <li className='nav-item' id={selected==="auth"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="auth" to="auth">Autorizaciones</Link>
                    </li>
                    <li className='nav-item ' id={selected==="users"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="users" to="users">Usuarios</Link>
                    </li>
                    <li className='nav-item' id={selected==="car"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="car" to="carrousell">Carrusel</Link>
                    </li>
                    <li className='nav-item' id={selected==="prods"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="prods" to="prods">Productos</Link>
                    </li>
                    <li className='nav-item' id={selected==="prod"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="prod" to="newProd">Nuevo Producto</Link>
                    </li>
                    <li className='nav-item' id={selected==="sells"?"linkSelected":""}>
                      <Link onClick={changeLinkSelected} name="sells" to="sells">Ventas</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div>
              <Outlet/>
            </div>
          </div>
        {/* ) : (
          <div>Debes ser administrador para ver esta página</div>
        )
      ) : (
        <div>Debes ser administrador para ver esta página</div>
      )} */}
      <Footer />
    </div>
  );
};

export default Admin;
