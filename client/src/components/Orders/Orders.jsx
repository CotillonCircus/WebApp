import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import OrderCard from './OrderCard/OrderCard';

const Orders = () => {
  const user = useSelector((state) => state.userLogged[0]);
  const [orders, setOrders] = useState([]);

  async function getOrders() {
    const orders = await axios.get(
      `order/user/${user.sub}`
    );

    setOrders(orders.data);
  }

  useEffect(() => {
    if (user) {
      getOrders();
    }
  }, [user]);

  return (
    <div>
      <h1>Mi historial de compras</h1>
      <br></br>
      {orders?.map((order) => {
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
      })}
    </div>
  );
};

export default Orders;
