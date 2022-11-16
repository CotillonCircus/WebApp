import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import OrderCard from './OrderCard/OrderCard';
import Pagination from '../pagination/pagination';

const Orders = () => {
  const user = useSelector((state) => state.userLogged[0]);
  const [orders, setOrders] = useState([]);
  const [page,setPage] = useState(1)

  useEffect(() => {
    user&&axios.get(
      `order/user/${user.sub}`
    ).then(orders=>setOrders(orders.data))

  }, [user]);

  return (
    <div>
      <div>
        <h1>Mi historial de compras</h1>
        <br></br>
        {Array.isArray(orders)?orders?.slice((page-1)*8,(page)*8).map((order) => {
          const actualDate = ((new Date()).getTime())
          const orderDate = ((new Date(order.createdAt)).getTime())
          const diference = (((actualDate-orderDate)/1000)/360)-360
          return (
            <div key={order.id}>
              <OrderCard
                id={order.id}
                products={order.products}
                totalPrize={order.totalPrize}
                diference={diference}
              />
            </div>
          );
        }):null}
      </div>
      <Pagination array={orders} limit={8} page={page} setPage={setPage}/>
    </div>
  );
};

export default Orders;
