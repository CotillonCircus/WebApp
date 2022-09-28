import React from 'react';
import './HomeProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs, getProductos } from '../../redux/actions';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
  const dispatch = useDispatch();
  const { productos, catalogs } = useSelector((state) => state);
  const user = useSelector((state) => state.userLogged[0]);

  useEffect(() => {
    dispatch(getProductos({}));
    dispatch(getCatalogs());
  }, [dispatch]);

  return (
    <div id='homeProducts'>
      <div id='catalogs'>
        <span className='bold'>categorias principales</span>
        {catalogs?.map((c) => {
          let key = c.name.split('_').join(' ');
          return <span key={key}>{key}</span>;
        })}
      </div>
      <div id='products'>
        {productos?.slice(0, 8).map((p) => {
          return (
            <Link
              key={'/details/' + p.id}
              to={'/details/' + p.id}
              className='singleProduct'
            >
              <img src={p.img} alt={p.name} />
              <span>{p.name}</span>
              {user ? (
                user.status === 'mayorista' || user.status === 'admin' ? (
                  <span>${p.price}</span>
                ) : (
                  <span>Se necesita autorizacion para ver los precios</span>
                )
              ) : (
                <span>Registrate y autorizate para ver los precios</span>
              )}
            </Link>
          );
        })}
      </div>
      <div id='productsButton'>
        <Link to='/products'>VER TODOS LOS PRODUCTOS</Link>
      </div>
    </div>
  );
};

export default HomeProducts;
