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

  const handleChange = (e)=>{
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(getAllOrders(input))
  }

  const handleRefresh = (e)=>{
    e.preventDefault();
    setInput({
      userName: "",
      productName: "",
      firstDate: "",
      secondDate: ""
    });
    dispatch(getAllOrders(input))
  }

  return (
    <div className={style.generalContainer}>
        <p className='display-6'>Historial de compras</p>
        <div>
            <form className={style.form}>
              <input type="text" placeholder='Usuario...' name="userName" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <input type="text" placeholder='Producto...' name="productName" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <label>
                Entre
              </label>
              <input type="date" placeholder='Fecha...' disabled={true} className={style.input}></input>
              <label>
                y
              </label>
              <input type="date" placeholder='Fecha...'  disabled={true} className={style.input}></input>
              <button type='submit' className={style.button} onClick={(e)=>handleSubmit(e)}>Buscar</button>
              <button className={style.button}>Refresh</button>
            </form>
        </div>
        <div>
            { 
             orders?.map((order)=>{
              return(
                <AdminOrderCard
                key={order.id}
                id={order.id}
                products={order.products}
                userName={order.user.name}
                fecha={order.createdAt}
                totalPrize={order.totalPrize}
                />
              )
            })
            }
        </div>
    </div>
  )
}

export default AdminOrders