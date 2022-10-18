import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {


  const { loginWithRedirect } = useAuth0();
  const handleClick = ()=>{
    localStorage.setItem("pathname",`${window.location.pathname}`)
    loginWithRedirect()
  }

  return (
    <div>
      <button
        className='btn btn-secondary btn-block'
        onClick={() => handleClick()}
      >
        Log in
      </button>
    </div>
  );
};

export default LoginButton;
