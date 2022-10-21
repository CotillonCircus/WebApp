import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { updateOrder } from '../../redux/actions';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import './Success.css';

export default function Success() {
  const searchParams = useSearchParams()[0];
  const [order, setOrder] = useState();
  const navigate = useNavigate();
  const { setCartItems } = useShoppingCart();

  useEffect(() => {
    updateOrder(searchParams.get('orderId'), setOrder, navigate);
  }, [searchParams, navigate]);

  useEffect(() => {
    order && setCartItems([]);
  }, [order, setCartItems]);

  return (
    order && (
      <div id='successDiv'>
        <span>compra realizada correctamente, desea ver el resumen?</span>
        <div id='successButtonsDiv'>
          <Button
            className='btn-secondary'
            onClick={() => navigate('/myOrders')}
          >
            si
          </Button>
          <Button className='btn-secondary' onClick={() => navigate('/home')}>
            no
          </Button>
        </div>
      </div>
    )
  );
}
