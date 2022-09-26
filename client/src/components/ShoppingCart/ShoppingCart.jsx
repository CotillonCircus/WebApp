import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { useSelector } from 'react-redux';
import { createPreference } from '../../redux/actions';
import { useDispatch } from 'react-redux';

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const { productos } = useSelector((state) => state);

  const dispatch = useDispatch();

  async function handleSubmit(e) {
    console.log(cartItems);
    console.log();
    e.preventDefault();
    dispatch(createPreference(cartItems));
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
          <Button onClick={handleSubmit} className='ms-auto'>
            Pagar
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
