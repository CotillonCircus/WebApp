//import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductById, getRelated, getProductos } from '../../redux/actions';
import './detailsProduct.css';
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaPinterestP,
//   FaCcVisa,
//   FaCcMastercard,
//   FaCreditCard,
// } from 'react-icons/fa';
// import { SiAmericanexpress } from 'react-icons/si';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';

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
  const { productos } = useSelector((state) => state);

  useEffect(() => {
    ID && dispatch(getProductById(ID));
  }, [dispatch, ID]);

  useEffect(() => {
    dispatch(getProductos({}));
  }, [dispatch]);

  useEffect(() => {
    productDetails.name && getRelated(productDetails.name, setRelated);
  }, [productDetails]);

  // async function x() {
  //   productDetails && setRelated(await getRelated(productDetails.name));
  // }

  return (
    productDetails && (
      <div id='detailsPage'>
        {/* <span>direccion</span> */}
        <div id='detailsContainer'>
          <div id='leftDetails'>
            <div id='productImg'>
              <img src={productDetails.img} alt='productDetails.img' />
            </div>
            {/* <div id='mediaIcons'>
              <span>
                <FaFacebookF />
              </span>
              <span>
                <FaTwitter />
              </span>
              <span>
                <FaPinterestP />
              </span>
            </div> */}
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
                    <span>Se necesita autorizacion para ver los precios</span>
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
            {/* <div id='payWays'>
              <div>
                <span className='bold'>24 </span>
                <span>CUOTAS DE</span>
                <span className='bold'></span>
                  {
                    user ? user.status === "mayorista" || user.status === "admin" ? (
                      <span>${productDetails.price / 24}</span>
                    ) : (<span>Se necesita autorizacion para ver los precios</span>) : (<span>Registrate y autorizate para ver los precios</span>)
                  } 
              </div>
              <div id='payIcons'>
                <FaCcVisa className='payIcon' />
                <FaCcMastercard className='payIcon' />
                <SiAmericanexpress className='payIcon' />
                <FaCreditCard className='payIcon' />
              </div>
              <span>VER MEDIOS DE PAGO</span>
            </div>
            <div id='payForm'>formulario de pago</div> */}
          </div>
        </div>
        {/* <div id='facebookcoments'>facebookcoments</div> */}
        <div id='relacionados'>
          {related
            ?.filter((rel) => rel.id !== productDetails.id)
            .slice(0, 4)
            .map((rel) => {
              return <img src={rel.img} alt={rel} key={rel.id} />;
            })}
        </div>
      </div>
    )
  );
};

export default DetailsProduct;
