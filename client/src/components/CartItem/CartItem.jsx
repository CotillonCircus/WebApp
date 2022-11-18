import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { useSelector } from 'react-redux';
import './cartitem.css';
let default_img="https://res.cloudinary.com/ddkurobug/image/upload/v1668720936/circus/nz5urtcilzmh5asyb3l5.png"

export function CartItem({ id, quantity }) {
  const { removeFromCart, increaseCartQuantity, decreaseCartQuantity } =
    useShoppingCart();
  const { allProducts } = useSelector((state) => state);

  const item = allProducts.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.img || default_img}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
        alt={item.name}
      />
      <div className='me-auto'>
        <div>
          {item.name}
          {quantity > 1 && (
            <span className='text-muted' style={{ fontSize: '0.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className='text-muted' style={{ fontSize: '0.75rem' }}>
          $ {item.price}
        </div>
      </div>

      <div>$ {item.price * quantity}</div>
      <div>
        <Button
          onClick={() => decreaseCartQuantity(item.id)}
          className='btn-secondary cartbutton'
        >
          -
        </Button>

        <Button
          onClick={() => increaseCartQuantity(item.id)}
          className='btn-secondary cartbutton'
        >
          +
        </Button>
      </div>
      <Button
        variant='outlined-danger'
        size='sm'
        className='btn-danger'
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
