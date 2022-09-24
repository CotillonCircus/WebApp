import React from 'react';
import { useEffect } from 'react';
import axios from "axios";
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useState } from 'react';
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {

    const user = useSelector((state)=>state.userLogged[0])
    const [orders,setOrders] = useState([]);

    useEffect(()=>{
        async function getOrders(){
            const pack = {
                sub: user.sub
            }
            const orders = await axios.get("http://localhost:3001/order/user",pack)
            setOrders(orders);
        }
        
        if(user){
            getOrders();
        }

    },[])

  return (
    <div>
        <h1>Mi historial de compras</h1>
        <br></br>
        {
            orders && orders?.map((order)=>{
                <div key={order.id}>
                    <OrderCard
                    id={order.id}
                    products={order.products}
                    totalPrize={order.totalPrize}
                    />
                </div>
            })
        }
    </div>
  )
}

export default Orders