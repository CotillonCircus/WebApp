import React from 'react';
import {useAuth0} from "@auth0/auth0-react";

const LoginButton = () => {

    const { loginWithRedirect } = useAuth0();

  return (
    <div>
        <button
        className='btn btn-primary btn-block'
        onClick={()=>loginWithRedirect()}
        >
            Log in
        </button>
    </div>
  )
}

export default LoginButton;