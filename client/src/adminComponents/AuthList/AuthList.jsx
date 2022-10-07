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
        <div className={styles.cardsContainer}>
            {
                auths.length? auths.map((auth)=>{
                    return(
                        <div key={auth.id}>
                            <AuthCard                           
                            sub={auth.sub}
                            id={auth.id}
                            name={auth.name}
                            email={auth.email}
                            company={auth.company}
                            cuit={auth.cuit}
                            address={auth.address}
                            razon_social={auth.razon_social}
                            setAuthFlag={setAuthFlag}
                            />
                        </div>
                    )
                })
                :<span>no hay pedidos de autorizacion pendientes</span>
            }
        </div>
    </div>
  )
}

export default AuthList