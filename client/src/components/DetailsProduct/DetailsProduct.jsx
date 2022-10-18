import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductById, getRelated } from '../../redux/actions';
import './detailsProduct.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useShoppingCart } from '../Context/ShoppingCartContext';
import default_img from '../../images/imagen_no_disponible.jpg';
import ReactImageMagnify from 'react-image-magnify';

const DetailsProduct = () => {
  const { productDetails } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { ID } = useParams();
  const [related, setRelated] = useState([]);
  const user = useSelector((state) => state.userLogged[0]);
  const [image, setImage] = useState(productDetails.img || default_img);
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const hoverHandle = (img) => {
    setImage(img);
  };

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
            <div id='left_1'>
              <img
                id='left_1_top'
                src={productDetails.img || default_img}
                alt='productDetails.img'
                onMouseOver={() =>
                  hoverHandle(productDetails.img || default_img)
                }
              />
              <img
                id='left_1_bottom'
                src={productDetails.secondaryImg || default_img}
                alt='productDetails.img'
                onMouseOver={() =>
                  hoverHandle(productDetails.secondaryImg || default_img)
                }
              />
            </div>
            <div id='left_2'>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: 'image',
                    isFluidWidth: true,
                    src: image,
                  },
                  largeImage: {
                    src: image,
                    width: 1500,
                    height: 1500,
                  },
                }}
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
                    <div id='cartcontrols'>
                      <span> ${productDetails.price}</span>
                      {productDetails && (
                        <div
                          className='d-flex align-items-center flex-column'
                          style={{ gap: '0.5rem' }}
                          key={productDetails.id}
                        >
                          <div className='mt-auto'>
                            {getItemQuantity(productDetails.id) === 0 ? (
                              <Button
                                className='w-100 btn-secondary'
                                onClick={() =>
                                  increaseCartQuantity(productDetails.id)
                                }
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
                                    onClick={() =>
                                      decreaseCartQuantity(productDetails.id)
                                    }
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
                                    onClick={() =>
                                      increaseCartQuantity(productDetails.id)
                                    }
                                    className='btn-secondary'
                                  >
                                    +
                                  </Button>
                                </div>
                                <Button
                                  variant='danger'
                                  size='sm'
                                  onClick={() =>
                                    removeFromCart(productDetails.id)
                                  }
                                >
                                  Quitar
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div id='register'>
                      <p>Se necesita autorización</p>
                      <p>para ver los precios</p>
                    </div>
                  )
                ) : (
                  <div id='register'>
                    <p>Registrate para</p>
                    <p>ver los precios</p>
                  </div>
                )}
              </span>
            </div>
          </div>
        </div>
        <div id='relacionados'>
          <p id='prelacionados'>PRODUCTOS RELACIONADOS</p>
          <div id='imgrelacionados'>
            {related
              ?.filter((rel) => rel.id !== productDetails.id)
              .slice(0, 4)
              .map((rel) => {
                return (
                  <Link key={rel.id} to={'/details/' + rel.id}>
                    <img src={rel.img || default_img} alt={rel} key={rel.id} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    )
  );
};

export default DetailsProduct;
