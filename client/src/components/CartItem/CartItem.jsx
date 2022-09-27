import { Button, Stack } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import { useSelector } from 'react-redux';

export function CartItem({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const { allProducts } = useSelector((state) => state);

  const item = allProducts.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
      <img
        src={item.img}
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
      <Button
        variant='outlined-danger'
        size='sm'
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
