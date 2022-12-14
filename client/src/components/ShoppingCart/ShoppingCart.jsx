import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { useSelector } from 'react-redux';
import { createPreference } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './ShoppingCart.css';
let loadingGIf="https://res.cloudinary.com/ddkurobug/image/upload/v1668720664/circus/ud7kads4mvh6epfjh1hl.png";

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const { productos, userLogged } = useSelector((state) => state);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    dispatch(
      createPreference(cartItems, userLogged[0].sub, window.location.origin)
    );
  }

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className='ms-auto fw-bold fs-5'>
            Total ${' '}
            {cartItems.reduce((total, cartItem) => {
              const item = productos.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)}
          </div>
          {!loading ? (
            <Button className='btn-secondary ms-auto' onClick={handleSubmit}>
              Pagar
            </Button>
          ) : (
            <img
              id='loadingCart'
              src={loadingGIf}
              className='mx-auto'
              alt='cargando.gif'
            />
          )}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
