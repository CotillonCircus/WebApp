import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '../../components/pagination/pagination';
import {
  getAllToFilter,
  getCatalogs,
  getProductsAdmin,
  putProductsGroup,
  updateProduct,
} from '../../redux/actions';
import ChangeProduct from '../ChangeProduct/ChangeProduct';
import './ProductsList.css';
import { confirmAlert } from 'react-confirm-alert';

export default function ProductsList() {
  const [list, setList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [productToChange, setProductToChange] = useState({});
  const dispatch = useDispatch();
  const [toFilter, setToFilter] = useState();
  const [filters, setFilters] = useState({
    colors: [],
    sizes: [],
    cants: [],
    catalogId: { id: '' },
    order: 'name ASC',
    name: '',
  });
  const [groupEdit, setGroupEdit] = useState(['price', 0]);
  const { catalogs } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch(getCatalogs());
  }, [dispatch]);

  useEffect(() => {
    getProductsAdmin({ ...filters, catalogId: filters.catalogId.id }, setList);
  }, [showForm, filters]);

  useEffect(() => {
    !toFilter && getAllToFilter(setToFilter);
  }, [toFilter]);

  function editProductStatus({ status, id , name}) {
    const newStatus = status === 'disponible' ? 'no disponible' : 'disponible';
    const newStatusrender = status === 'disponible' ? 'oculto' : 'disponible';
    confirmAlert({
      title: 'El producto ' + name + " cambiara a -" + newStatusrender,
      message: '¿Está seguro?',
      buttons: [
        {
          label: 'Sí',
          onClick: () =>
            dispatch(updateProduct({ status: newStatus, id }, setList))
        },
        {
          label: 'No',
        },
      ],
    });
  }

  function deleteProduct(id, img, name) {
    confirmAlert({
      title: 'Eliminara el producto ' + name,
      message: '¿Está seguro?',
      buttons: [
        {
          label: 'Sí',
          onClick: () =>
            dispatch(updateProduct({ status: 'deleted', id, img }, setList)),
        },
        {
          label: 'No',
        },
      ],
    });
  }

  function deleteFilter(e) {
    const { name, value } = e.target;
    let newFilters;
    if (name === 'catalogId') {
      newFilters = { id: '' };
    } else {
      newFilters = filters[name].filter((filter) => filter !== value);
    }
    setFilters({ ...filters, [name]: newFilters });
  }

  function updateFilter(e) {
    const { name, value } = e.target;
    let exist;
    let newFilters;
    if (name === 'catalogId') {
      newFilters = catalogs.find((catalog) => parseInt(value) === catalog.id);
    } else {
      newFilters = [...filters[name]];
      exist = filters[name].includes(value);
      !exist && newFilters.push(value);
    }
    setFilters({ ...filters, [name]: newFilters });
  }

  function handleGroupProp(e) {
    setGroupEdit([e.target.value, 0]);
  }

  function handleGroupChange(e) {
    setGroupEdit([groupEdit[0], e.target.value]);
  }

  function updateProductsGroup() {
    const [prop, value] = groupEdit;
    putProductsGroup(list, prop, value, setList);
  }

  function handleOrder(value) {
    setFilters({ ...filters, order: value });
  }

  return (
    <div id='adminProductsList'>
      <div id='listProducts'>
        <div id='filtersSelection'>
          <b>FILTROS</b>
          <div>
            <label>color</label>
            <select name='colors' onChange={updateFilter}>
              {toFilter?.colors?.map((color) => (
                <option key={'adminColor' + color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>cantidad</label>
            <select name='cants' onChange={updateFilter}>
              {toFilter?.cants?.map((quantity) => (
                <option key={'adminQuantity' + quantity} value={quantity}>
                  {quantity}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>tamaño</label>
            <select name='sizes' onChange={updateFilter}>
              {toFilter?.sizes?.map((size) => (
                <option key={'adminSize' + size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>catalogo</label>
            <select name='catalogId' onChange={updateFilter}>
              {catalogs?.map((catalog) => (
                <option key={'adminCatalog' + catalog.id} value={catalog.id}>
                  {catalog.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div id='filtersSelected'>
          <b>filtros aplicados: </b>
          {filters.colors.map((color) => (
            <button
              key={'adminSelected' + color}
              onClick={deleteFilter}
              name='colors'
              value={color}
            >
              <span>{"color: "+color}</span> x
            </button>
          ))}
          {filters.cants.map((quantity) => (
            <button
              key={'adminSelected' + quantity}
              onClick={deleteFilter}
              name='cants'
              value={quantity}
            >
              <span>{"cant: "+quantity}</span> x
            </button>
          ))}
          {filters.sizes.map((size) => (
            <button
              key={'adminSelected' + size}
              onClick={deleteFilter}
              name='sizes'
              value={size}
            >
              <span>{"tmño: "+size}</span> x
            </button>
          ))}
          {filters.catalogId.id && (
            <button onClick={deleteFilter} name='catalogId'>
              <span>{"catalogo: "+filters.catalogId.name}</span> x
            </button>
          )}
        </div>
        <div id='groupChange'>
          <button onClick={updateProductsGroup}>EDITAR GRUPO</button>
          <div>
            <select onChange={handleGroupProp} id='editOption'>
              <option value={'price'}>PRECIO</option>
              <option value={'stock'}>STOCK</option>
            </select>
          </div>
          <div id='inputOption'>
            <p>+</p>
            <input
              onChange={handleGroupChange}
              type='number'
              value={groupEdit[1]}
              placeholder='ingrese cambio...'
            ></input>
          </div>
        </div>
        <div>
          <div id='listProps'>
            <span onClick={() => handleOrder('name ASC')}>nombre</span>
            <span onClick={() => handleOrder('price ASC')}>precio</span>
            <span onClick={() => handleOrder('size ASC')}>tamaño</span>
            <span onClick={() => handleOrder('color ASC')}>color</span>
            <span onClick={() => handleOrder('stock ASC')}>stock</span>
            <span onClick={() => handleOrder('cant ASC')}>cant</span>
            <span>status</span>
            <span>editar</span>
            {/* <span></span> */}
          </div>
          {list?.slice((page - 1) * 8, page * 8).map((product, i) => {
            return (
              <div
                key={'adminProduct' + product.name + i}
                className='singleListProduct'
              >
                <span>{product.name}</span>
                <span>{product.price}</span>
                <span>{product.size}</span>
                <span>{product.color}</span>
                <span>{product.stock}</span>
                <span>{product.cant}</span>
                <p
                  className='productStatus'
                  onClick={() => editProductStatus(product)}
                >
                  {product.status === 'disponible' ? 'disponible' : 'oculto'}
                </p>
                <button
                  className='productEdit'
                  onClick={() => {
                    setProductToChange(product);
                    window.scroll(0,1500)
                    setShowForm(true);
                  }}
                >
                  MODIFICAR
                </button>
                <button
                  className='productEdit'
                  onClick={() => {
                    deleteProduct(product.id, product.img, product.name);
                  }}
                >
                  ELIMINAR
                </button>
              </div>
            );
          })}
          <Pagination array={list} limit={8} page={page} setPage={setPage} />
        </div>
      </div>
      {showForm && (
        <ChangeProduct
          productToChange={productToChange}
          setShowForm={setShowForm}
        />
      )}
    </div>
  );
}
