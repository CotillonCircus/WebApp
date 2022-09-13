import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllAuths } from '../../redux/actions';
import styles from "./AuthList.module.css";
import AuthCard from "./AuthCard/AuthCard";


const AuthList = () => {

    const dispatch = useDispatch();
    const auths = useSelector((state)=>state.auths);
    const [authFlag, setAuthFlag] = useState(true);

    useEffect(()=>{
        dispatch(getAllAuths());
    },[dispatch,authFlag]);

  return (
    <div>
        <p className='display-6'>Pedidos de autorización</p>
        <div className={styles.cardsContainer}>
            {
                auths && auths?.map((auth)=>{
                    return(
                        <div key={auth.id}>
                            <AuthCard                           
                            sub={auth.sub}
                            id={auth.id}
                            name={auth.name}
                            email={auth.email}
                            company={auth.company}
                            cuit={auth.cuit}
                            setAuthFlag={setAuthFlag}
                            />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default AuthList