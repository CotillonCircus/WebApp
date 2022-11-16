import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions';
import { UserCard } from './UserCard/UserCard';
import Pagination from '../../components/pagination/pagination';

const UserList = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getAllUsers());
  }, [flag, dispatch]);

  return (
    <div>
      <div>
        {users?.slice((page - 1) * 8, page * 8)?.map((user) => {
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
      <Pagination array={users} limit={8} page={page} setPage={setPage} />
    </div>
  );
};

export default UserList;
