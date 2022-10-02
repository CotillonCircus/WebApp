import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions';
import { UserCard } from './UserCard/UserCard';

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [flag, dispatch]);

  return (
    <div>
      <p className='display-6'>Usuarios autorizados</p>
      {users?.map((user) => {
        return (
          <div key={user.sub}>
            <UserCard
              name={user.name}
              email={user.email}
              sub={user.sub}
              setFlag={setFlag}
            />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
