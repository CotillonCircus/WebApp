import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import UserList from '../../adminComponents/UserList/UserList';
import AuthList from '../../adminComponents/AuthList/AuthList';
import { useSelector } from 'react-redux';
import EditCarrousel from '../../components/EditCarrousel/EditCarrousel';
import NewProduct from '../../components/NewProduct/NewProduct';

const Admin = () => {
  const user = useSelector((state) => state.userLogged[0]);

  return (
    <div>
      <Header />
      <Navbar />
      {user ? (
        user.status === 'admin' ? (
          <div>
            <AuthList />
            <UserList />
            <EditCarrousel />
            <NewProduct />
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
