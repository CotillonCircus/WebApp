import React from 'react';
import './FiltersSection.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllToFilter, getProductos } from '../../redux/actions';

export default function FilterSection() {
  const initialFilter = {
    catalogId: "",
    color: [],
    size: [],
    cant: [],
    alf: '',
    price: '',
  };
  const { catalogs, productos } = useSelector((state) => state);
  const [toFilter, SetToFilter] = useState({});
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({ ...initialFilter });

  useEffect(() => {
    getAllToFilter(SetToFilter);
    !(productos?.length)&&dispatch(getProductos({}));
  }, [dispatch]);
  
  const onClick = (e) => {
    let newFilters = { ...filters };
    let value = e.target.value;
    let name = e.target.name;

    if (name === 'alf' || name === 'price') {
      newFilters[name] = value === 'ASC' ? 'DESC' : 'ASC';
    } else {
      if(name==="catalogId"){
        newFilters[name]=value
      }else{
        if (newFilters[name].includes(value)) {
          newFilters[name] = newFilters[name].filter((filt) => filt !== value);
        } else {
          newFilters[name].push(value);
        }
      }
    }
    setFilters({ ...newFilters });
    dispatch(getProductos({ ...newFilters }));
  };

  const reset = () => {
    setFilters({ ...initialFilter });
    dispatch(getProductos({}));
  };

  return (
    <div id='FiltersSection'>
      <div id='catalogs' className='filter'>
        <span>categorias </span>
        {catalogs?.map((catalogo) => {
          let value = catalogo.name.split('_').join(' ');
          return (
            <button
              key={value}
              name='catalogId'
              onClick={onClick}
              value={catalogo.id}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div id='colorsFilters' className='filter'>
        <span>colores </span>
        {toFilter.colors?.map((color) => {
          const stock = productos.filter(
            (product) => product.color === color
          ).length;
          if (!stock) return <></>;
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
              <label className='form-check-label'>{color}</label>
              <label>{'(' + stock + ')'}</label>
            </div>
          );
        })}
      </div>
      <div id='cantsFilters' className='filter'>
        <span>por cantidad </span>
        {toFilter.cants?.map((quantity) => {
          const stock = productos.filter(
            (product) => product.cant === quantity
          ).length;
          if (!stock) return <></>;
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
              <label className='form-check-label'>{quantity}</label>
              <label>{'(' + stock + ')'}</label>
            </div>
          );
        })}
      </div>
      <div id='sizesFilters' className='filter'>
        <span>tamaño </span>
        {toFilter.sizes?.map((size) => {
          const stock = productos.filter(
            (product) => product.size === size
          ).length;
          if (!stock) return <></>;
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
              <label className='form-check-label'>{size}</label>
              <label>{'(' + stock + ')'}</label>
            </div>
          );
        })}
      </div>

      <div>
        <span>ordernar alfabeticamente</span>
        <button name='alf' onClick={onClick} value={filters.alf || 'ASC'}>
          {filters.alf || 'ASC'}
        </button>
      </div>
      <div>
        <span>ordernar por precios</span>
        <button name='price' onClick={onClick} value={filters.price || 'ASC'}>
          {filters.price || 'ASC'}
        </button>
      </div>
      <button onClick={reset}>reset</button>
    </div>
  );
}
