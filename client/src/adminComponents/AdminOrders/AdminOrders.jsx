import React from 'react';
import style from "./AdminOrders.module.css";
import {getAllOrders} from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdminOrderCard from './AdminOrderCard/AdminOrderCard';
import { useState } from 'react';

const AdminOrders = () => {

  const dispatch = useDispatch();
  const orders = useSelector((state)=>state.orders);
  const [input,setInput] = useState({
    userName: "",
    productName: "",
    firstDate: "",
    secondDate: ""
  })

  useEffect(()=>{
    dispatch(getAllOrders(input))
  },[dispatch])

  return (
    <div className={style.generalContainer}>
        <p className='display-6'>Historial de compras</p>
        <div>
            <form className={style.form}>
              <input type="text" placeholder='Usuario...' className={style.input}></input>
              <input type="text" placeholder='Producto...' className={style.input}></input>
              <label>
                Entre
              </label>
              <input type="date" placeholder='Fecha...' className={style.input}></input>
              <label>
                y
              </label>
              <input type="date" placeholder='Fecha...' className={style.input}></input>
              <button type='submit' className={style.button}>Buscar</button>
              <button className={style.button}>Refresh</button>
            </form>
        </div>
        <div>
            { 
             orders?.map((order)=>{
              return(
                <AdminOrderCard
                key={order.id}
                />
              )
            })
            }
        </div>
    </div>
  )
}

export default AdminOrders