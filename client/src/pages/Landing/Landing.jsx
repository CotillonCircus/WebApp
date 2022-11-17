import React from 'react';
import style from './Landing.module.css';
import { Link} from 'react-router-dom';
let Logo="https://res.cloudinary.com/ddkurobug/image/upload/v1668720916/circus/a3sporskwrjaiineevhc.jpg"

const Landing = () => {

  return (
    <div className={style.container}>
      <div className='col-lg-6 logo'>
        <img src={Logo} className='d-block w-50 mx-auto' alt='logo' />
      </div>
      <div className={style.buttonContainer}>
        <Link to={"/m/home"}>
          <button className={style.button}>MINORISTA</button>
        </Link>
        <Link to={'/home'}>
          <button className={style.button}>MAYORISTA</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
