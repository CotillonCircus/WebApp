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
      {user ? (
        user.status === 'admin' ? (
          <div>
            <div id="routesLinksAdmin" className='bg-light'>
              <Link id={selected==="auth"?"linkSelected":""} onClick={changeLinkSelected} name="auth" to="auth">Autorizaciones</Link>
              <Link id={selected==="users"?"linkSelected":""} onClick={changeLinkSelected} name="users" to="users">Usuarios</Link>
              <Link id={selected==="car"?"linkSelected":""} onClick={changeLinkSelected} name="car" to="carrousell">Carrusel</Link>
              <Link id={selected==="prods"?"linkSelected":""} onClick={changeLinkSelected} name="prods" to="prods">Productos</Link>
              <Link id={selected==="prod"?"linkSelected":""} onClick={changeLinkSelected} name="prod" to="newProd">Nuevo Producto</Link>
              <Link id={selected==="sells"?"linkSelected":""} onClick={changeLinkSelected} name="sells" to="sells">Ventas</Link>
            </div>
            <div>
              <Outlet/>
            </div>
          </div>
        ) : (
          <div>Debes ser administrador para ver esta página</div>
        )
      ) : (
        <div>Debes ser administrador para ver esta página</div>
      )}
      <Footer />
    </div>
  );
};

export default Admin;
