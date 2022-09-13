import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import UserList from '../../adminComponents/UserList/UserList';
import AuthList from '../../adminComponents/AuthList/AuthList';

const Admin = () => {
  return (
    <div>
      <Header />
      <Navbar />
      {/* <UserList /> */}
      <AuthList/>
      <Footer />
    </div>
  )
}

export default Admin