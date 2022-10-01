import React from 'react';
import './FiltersSection.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllToFilter, getProductos } from '../../redux/actions';
import { Stack } from 'react-bootstrap';

export default function FilterSection() {
  const initialFilter = {
    catalogId: '',
    color: [],
    size: [],
    cant: [],
    order: 'name ASC',
  };
  const { catalogs, productos } = useSelector((state) => state);
  const [toFilter, SetToFilter] = useState({});
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ ...initialFilter });

  useEffect(() => {
    getAllToFilter(SetToFilter);
    !productos?.length && dispatch(getProductos({}));
  }, [dispatch]);

  const onClick = (e) => {
    let newFilters = { ...filters };
    let value = e.target.value;
    let name = e.target.name;

    if (name === 'catalogId') {
      newFilters[name] = value;
    } else {
      if (newFilters[name].includes(value)) {
        newFilters[name] = newFilters[name].filter((filt) => filt !== value);
      } else {
        newFilters[name].push(value);
      }
    }

    setFilters({ ...newFilters });
    dispatch(getProductos({ ...newFilters }));
  };

  const reset = () => {
    setFilters({ ...initialFilter });
    dispatch(getProductos({}));
  };

  const deleteFilter = (e) => {
    const { name, value } = e.target;
    const filtered = filters[name].filter((filt) => filt !== value);
    const newFilters = { ...filters, [name]: filtered };
    setFilters(newFilters);
    dispatch(getProductos({ ...newFilters }));
    const cheks = document.getElementsByName(name);
    cheks.forEach((check) => {
      if (check.value === value) check.checked = false;
    });
  };

  const handleOrder = (e) => {
    const newFilters = { ...filters, order: e.target.value };
    setFilters(newFilters);
    dispatch(getProductos({ ...newFilters }));
  };

  return (
    <div id='FiltersSection'>
      <div id='catalogs' className='filter'>
        <span>Categorías</span>
        {catalogs?.map((catalogo) => {
          let value = catalogo.name;
          // let value = catalogo.name.split('_').join(' ');
          return (
            <button
              key={value}
              name='catalogId'
              className={
                parseInt(filters.catalogId) === catalogo.id
                  ? 'catalogSelected'
                  : ''
              }
              onClick={onClick}
              value={catalogo.id}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div id='filtersApplied'>
        <b>FILTROS APLICADOS</b>
        {filters.color.map((color) => (
          <button onClick={deleteFilter} name='color' value={color}>
            <span>{color}</span> x
          </button>
        ))}
        {filters.cant.map((cant) => (
          <button onClick={deleteFilter} name='cant' value={cant}>
            <span>{cant}</span> x
          </button>
        ))}
        {filters.size.map((size) => (
          <button onClick={deleteFilter} name='size' value={size}>
            <span>{size}</span> x
          </button>
        ))}
      </div>

      <div>
        <b>ORDEN</b>
        <select onChange={handleOrder} id='orderSection'>
          <option value={'name ASC'}>{'nombre-> A-Z'}</option>
          <option value={'name DESC'}>{'nombre-> Z-A'}</option>
          <option value={'price ASC'}>{'precio-> menor↑'}</option>
          <option value={'price DESC'}>{'precio-> mayor↓'}</option>
        </select>
      </div>

      <div id='colorsFilters' className='filter'>
        <span>Colores</span>
        {toFilter.colors?.map((color) => {
          const stock = productos.filter(
            (product) => product.color === color
          ).length;
          return (
            <div key={'color' + color} className='form-check'>
              <input
                name='color'
                className='form-check-input'
                onClick={onClick}
                type='checkbox'
                value={color}
                id='flexCheckDefault'
              />
              <Stack
                direction='horizontal'
                gap={2}
                className='d-flex align-items-center'
              >
                <label className='form-check-label'>{color}</label>
                <label>{'(' + stock + ')'}</label>
              </Stack>
            </div>
          );
        })}
      </div>
      <div id='cantsFilters' className='filter'>
        <span>Cantidad</span>
        {toFilter.cants?.map((quantity) => {
          const stock = productos.filter(
            (product) => product.cant === quantity
          ).length;
          return (
            <div key={'cant' + quantity} className='form-check'>
              <input
                name='cant'
                className='form-check-input'
                onClick={onClick}
                type='checkbox'
                value={quantity}
                id='flexCheckDefault'
              />
              <Stack
                direction='horizontal'
                gap={2}
                className='d-flex align-items-center'
              >
                <label className='form-check-label'>{quantity}</label>
                <label>{'(' + stock + ')'}</label>
              </Stack>
            </div>
          );
        })}
      </div>
      <div id='sizesFilters' className='filter'>
        <span>Tamaños</span>
        {toFilter.sizes?.map((size) => {
          const stock = productos.filter(
            (product) => product.size === size
          ).length;
          return (
            <div key={'size' + size} className='form-check'>
              <input
                name='size'
                className='form-check-input'
                onClick={onClick}
                type='checkbox'
                value={size}
                id='flexCheckDefault'
              />
              <Stack
                direction='horizontal'
                gap={2}
                className='d-flex align-items-center'
              >
                <label className='form-check-label'>{size}</label>
                <label>{'(' + stock + ')'}</label>
              </Stack>
            </div>
          );
        })}
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
