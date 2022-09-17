import React from 'react';
import './ProductsCards.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs } from '../../redux/actions';
import FilterSection from '../FiltersSection/FiltersSection';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';

const ProductsCards = (id) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  // const [quantity, setQuantity] = useState([])
  //   = getItemQuantity(id);
  const dispatch = useDispatch();
  const { productos, catalogs } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getCatalogs());
  }, [dispatch]);

  return (
  
    <div id="Products">
        <FilterSection/>
        
      <div id='products'>
        {productos?.map((p) => {
          return (
            <div key={p.id}>
              <Link to={'/details/' + p.id} className='singleProduct'>
                <img src={p.img} />
                <span>{p.name}</span>
                <span>${p.price}</span>
              </Link>
              <div className='mt-auto'>
                {getItemQuantity(p.id) === 0 ? (
                  <Button
                    className='w-100'
                    onClick={() => increaseCartQuantity(p.id)}
                  >
                    Agregar al Carrito
                  </Button>
                ) : (
                  <div
                    className='d-flex align-items-center flex-column'
                    style={{ gap: '0.5rem' }}
                  >
                    <div
                      className='d-flex align-items-center justify-content-center'
                      style={{ gap: '0.5rem' }}
                    >
                      <Button onClick={() => decreaseCartQuantity(p.id)}>
                        -
                      </Button>
                      <div>
                        <span className='fs-3'>{getItemQuantity(p.id)}</span> en
                        carrito
                      </div>
                      <Button onClick={() => increaseCartQuantity(p.id)}>
                        +
                      </Button>
                    </div>
                    <Button
                      variant='danger'
                      size='sm'
                      onClick={() => removeFromCart(p.id)}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsCards;
