import { Offcanvas, Stack, Button } from 'react-bootstrap';
import { CartItem } from '../CartItem/CartItem';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { useSelector } from 'react-redux';
import { createPreference } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import loadingGIf from "../../images/cargando.gif"
import "./ShoppingCart.css"

export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();
  const { productos, userLogged } = useSelector((state) => state);
  const [loading,setLoading] = useState(false)

  const dispatch = useDispatch();
  //const navigate = useNavigate();

  async function handleSubmit(e) {
    setLoading(true)
    e.preventDefault();
    dispatch(createPreference(cartItems, userLogged[0].sub,window.location.origin));
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
          {!loading?
          <Button onClick={handleSubmit} className='ms-auto'>
            Pagar
          </Button>
          :<img id="loadingCart" src={loadingGIf} alt="cargando.gif"/>}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
