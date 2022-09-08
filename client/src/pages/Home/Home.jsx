import React from 'react';
import LoginButton from "../../components/LoginButton/LoginButton";
import LogOutButton from '../../components/LogOutButton/LogOutButton';
import {useAuth0} from "@auth0/auth0-react";

const Home = () => {

  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {
        isAuthenticated ? (
          <LogOutButton></LogOutButton>
        ) : (
          <LoginButton></LoginButton>
        )
      }
    </div>
  )
}

export default Home