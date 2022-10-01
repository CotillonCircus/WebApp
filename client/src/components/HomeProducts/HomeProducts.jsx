import React from 'react';
import './HomeProducts.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCatalogs, getProductos } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const HomeProducts = () => {
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
          {/* {catalogs?.map((c) => {
            let key = c.name.split('_').join(' ');
            return <span key={key}>{key}</span>;
          })} */}
        </div>
        {/* <ul className='products'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        <li>15</li>
        <li>16</li>
        <li>17</li>
        <li>18</li>
        <li>19</li>
        <li>20</li>
      </ul> */}
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
      <div id='productsButton'>
        <Link to='/products'>Ver todos los productos</Link>
      </div>
    </div>
  );
};

export default HomeProducts;
