import React from 'react';
import style from "./Landing.module.css";
import { Link } from "react-router-dom";
import Logo from '../../images/circus_cotillon_logo.jpg';

const Landing = () => {
  return (
    <div className={style.container}>
      <div className='col-lg-6 logo'>
              <img src={Logo} className='d-block w-50 mx-auto' alt='logo' />
      </div>
      <div className={style.buttonContainer}>
        <button className={style.button}>Minorista</button>
          <Link to={"/home"}>
            <button className={style.button}>Mayorista</button>
          </Link>
          
      </div>
    </div>
  )
}

export default Landing