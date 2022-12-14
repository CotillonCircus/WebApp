import React from 'react';
import './HomeProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs, getProductos } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
let default_img ="https://res.cloudinary.com/ddkurobug/image/upload/v1668720936/circus/nz5urtcilzmh5asyb3l5.png"

const HomeProducts = ({ section }) => {
  const dispatch = useDispatch();
  const { productos, catalogs } = useSelector((state) => state);
  const user = useSelector((state) => state.userLogged[0]);
  const navigate = useNavigate();

  const handleClick = (e) => {
    dispatch(getProductos({ catalogId: e.target.value }));
    navigate('/');
    navigate('/products');
  };

  useEffect(() => {
    dispatch(getProductos({}));
    dispatch(getCatalogs());
  }, [dispatch]);

  return (
    <div>
      <div id='homeProducts'>
        {section !== 'minorist' ? (
          <div id='catalogs'>
            <span className='bold'>Categorías Principales</span>
            {catalogs?.map((c) => {
              return (
                <li
                  className='mainclasses'
                  onClick={handleClick}
                  value={c.id}
                  key={'li' + c.id}
                >
                  {c.name}
                </li>
              );
            })}
          </div>
        ) : (
          <div id='catalogs'></div>
        )}

        <div id='products'>
          {productos?.slice(0, 8).map((p) => {
            return (
              <Link
                key={'/details/' + p.id}
                to={section === 'minorist' ? '/m/home' : '/details/' + p.id}
                className='singleProduct'
              >
                <img src={p.img || default_img} alt={p.name} />
                <span>{p.name}</span>
                {user ? (
                  user.status === 'mayorista' || user.status === 'admin' ? (
                    <span>${p.price}</span>
                  ) : (
                    <span>Se necesita autorización para ver los precios</span>
                  )
                ) : (
                  <span>Registrese para ver los precios</span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
      {section !== 'minorist' ? (
        <div id='productsButton'>
          <Link to='/products'>Ver todos los productos</Link>
        </div>
      ) : null}
    </div>
  );
};

export default HomeProducts;
