import React from 'react';
import style from "./Landing.module.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className={style.container}>
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