import React from 'react';
import style from "./AdminOrders.module.css";
import {getAllOrders} from "../../redux/actions";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AdminOrderCard from './AdminOrderCard/AdminOrderCard';
import { useState } from 'react';
import Pagination from '../../components/pagination/pagination';

const AdminOrders = () => {

  const dispatch = useDispatch();
  const orders = useSelector((state)=>state.orders);
  const [input,setInput] = useState({
    id:"",
    userName: "",
    productName: "",
    firstDate: "",
    secondDate: ""
  })
  const [page,setPage] = useState(1)

  useEffect(()=>{
    dispatch(getAllOrders(input))
  },[dispatch,input])

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

  return (
    <div className={style.generalContainer}>
        <p className='display-6'>Historial de compras</p>
        <div>
            <form className={style.form}>
              <input type="text" placeholder='Usuario...' name="userName" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <input type="text" placeholder='Producto...' name="productName" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <input type="text" placeholder='nº de compra...' name="id" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <label>
                Entre
              </label>
              <input type="date" placeholder='Fecha...' name="firstDate" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <label>
                y
              </label>
              <input type="date" placeholder='Fecha...' name="secondDate" onChange={(e)=>handleChange(e)} className={style.input}></input>
              <button type='submit' className={style.button} onClick={(e)=>handleSubmit(e)}>Buscar</button>
              <button className={style.button}>Refresh</button>
            </form>
        </div>
        <div>
          <div>
              { 
              orders?.slice((page-1)*8,(page)*8).map((order)=>{
                return(
                  <AdminOrderCard
                  key={order.id}
                  id={order.id}
                  products={order.products}
                  userName={order.user?.name}
                  fecha={order.createdAt}
                  totalPrize={order.totalPrize}
                  />
                  )
                })
              }
          </div>
          <Pagination array={orders} limit={8} page={page} setPage={setPage}/>
        </div>
    </div>
  )
}

export default AdminOrders