import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, getRelated } from '../../redux/actions';
import './detailsProduct.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import default_img from '../../images/imagen_no_disponible.jpg';

const DetailsProduct = () => {
  const { productDetails } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { ID } = useParams();
  const [related, setRelated] = useState([]);
  const user = useSelector((state) => state.userLogged[0]);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  useEffect(() => {
    ID && dispatch(getProductById(ID));
  }, [dispatch, ID]);

  useEffect(() => {
    productDetails.name && getRelated(productDetails.name, setRelated);
  }, [productDetails]);

  return (
    productDetails && (
      <div id='detailsPage'>
        <div id='detailsContainer'>
          <div id='leftDetails'>
            <div id='productImg'>
              <img
                src={productDetails.img || default_img}
                alt='productDetails.img'
              />
            </div>
          </div>
          <div id='rigthDetails'>
            <div id='productDetails'>
              <span id='productName'>
                {productDetails.name} {productDetails.color}{' '}
                {productDetails.size || 24}" X{productDetails.cant || 20}
              </span>
              <span id='productPrice'>
                {user ? (
                  user.status === 'mayorista' || user.status === 'admin' ? (
                    <span> ${productDetails.price}</span>
                  ) : (
                    <span>Se necesita autorización para ver los precios</span>
                  )
                ) : (
                  <span>Registrate y autorizate para ver los precios</span>
                )}
              </span>
            </div>
            <div id='cartcontrols'>
              {productDetails && (
                <div
                  className='d-flex align-items-center flex-column'
                  style={{ gap: '0.5rem' }}
                  key={productDetails.id}
                >
                  <div
                    className='d-flex align-items-center justify-content-center'
                    style={{ gap: '0.5rem' }}
                  >
                    <Button
                      onClick={() => decreaseCartQuantity(productDetails.id)}
                      className='btn-secondary'
                    >
                      -
                    </Button>
                    <div>
                      <span className='fs-3'>
                        {getItemQuantity(productDetails.id)}
                      </span>{' '}
                      en carrito
                    </div>
                    <Button
                      onClick={() => increaseCartQuantity(productDetails.id)}
                      className='btn-secondary'
                    >
                      +
                    </Button>
                  </div>
                  <Button
                    variant='danger'
                    size='sm'
                    onClick={() => removeFromCart(productDetails.id)}
                  >
                    Quitar
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div id='relacionados'>
          {related
            ?.filter((rel) => rel.id !== productDetails.id)
            .slice(0, 4)
            .map((rel) => {
              return (
                <img src={rel.img || default_img} alt={rel} key={rel.id} />
              );
            })}
        </div>
      </div>
    )
  );
};

export default DetailsProduct;
