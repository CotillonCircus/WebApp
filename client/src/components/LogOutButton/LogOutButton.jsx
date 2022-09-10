import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLogin } from '../../redux/actions';

const LogOutButton = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { userLogged } = useSelector((state) => state);

  useEffect(() => {
    user && user.sub && dispatch(getLogin(user));
  }, [dispatch, user]);

  const { logout } = useAuth0();

  return (
    <div>
      <button
        onClick={() => {
          logout({
            returnTo: window.location.origin,
          });
        }}
      >
        {userLogged[0]?.name}
      </button>
    </div>
  );
};

export default LogOutButton;
