import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getAllUsers } from '../../redux/actions';

const UserList = () => {

    const users = useSelector((state)=>state.users);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllUsers());
    },[])

  return (
    <div>
        {
            users?.map((user)=>{
                return(
                    <div key={user.sub}>
                        <p>{user.name}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UserList