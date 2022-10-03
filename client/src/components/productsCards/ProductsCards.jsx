import React from 'react';
import './ProductsCards.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs } from '../../redux/actions';
import FilterSection from '../FiltersSection/FiltersSection';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import default_img from "../../images/imagen_no_disponible.jpg"
import { useState } from 'react';
import loading from "../../images/cargando.gif"

const ProductsCards = (id) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const dispatch = useDispatch();

  const { productos } = useSelector((state) => state);
  const user = useSelector((state) => state.userLogged[0]);
  const [productsLoading,setProductsLoading] = useState(false)

  useEffect(() => {
    dispatch(getCatalogs());
  }, [dispatch]);

  return (
    <div id='productscards'>
      <FilterSection setProductsLoading={setProductsLoading}/>
      {!productsLoading?
        <div id='products'>
          {productos?.map((p) => {
            return (
              <div key={p.id} className='singleProduct'>
                <Link to={'/details/' + p.id}>
                  <img src={p.img||default_img} alt={p.name} />
                </Link>
                <span>{p.name}</span>
                {user ? (
                  user.status === 'mayorista' || user.status === 'admin' ? (
                    <>
                      <span>${p.price}</span>
                      <div className='mt-auto'>
                        {getItemQuantity(p.id) === 0 ? (
                          <Button
                            className='w-100 btn-secondary'
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
                              <Button
                                onClick={() => decreaseCartQuantity(p.id)}
                                className='btn-secondary'
                              >
                                -
                              </Button>
                              <div>
                                <span className='fs-3'>
                                  {getItemQuantity(p.id)}
                                </span>{' '}
                                en carrito
                              </div>
                              <Button
                                onClick={() => increaseCartQuantity(p.id)}
                                className='btn-secondary'
                              >
                                +
                              </Button>
                            </div>
                            <Button
                              variant='danger'
                              size='sm'
                              onClick={() => removeFromCart(p.id)}
                            >
                              Quitar
                            </Button>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <span>Se necesita autorizacion para ver los precios</span>
                  )
                ) : (
                  <span>Registrate y autorizate para ver los precios</span>
                )}
              </div>
            );
          })}
        </div>
        :<img id="loadingProducts" src={loading} alt="cargando.gif"/>}
    </div>
  );
};

export default ProductsCards;
