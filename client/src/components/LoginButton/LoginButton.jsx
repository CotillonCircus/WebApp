import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {changePathname} from "../../redux/actions";
import { useDispatch} from 'react-redux';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  const dispatch = useDispatch();
  const handleClick = ()=>{
    loginWithRedirect();
    dispatch(changePathname(`${window.location.pathname}`))
    localStorage.setItem("pathname",`${window.location.pathname}`)
  }
  //${window.location.origin}
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
