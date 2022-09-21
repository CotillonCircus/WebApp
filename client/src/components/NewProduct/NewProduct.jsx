import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getAllToFilter } from '../../redux/actions';
import './NewProduct.css';

export default function NewProduct() {
  const [showForm, setShowForm] = useState(false);
  const { catalogs } = useSelector((state) => state);
  const [filters, setFilters] = useState({});
  const [img, setImg] = useState('');
  useEffect(() => {
    getAllToFilter(setFilters);
  }, []);

  function handlechange(e) {
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setImg(url);
  }

  return showForm ? (
    <div>
      <form id='productForm'>
        <div id='x'>
          <label>nombre</label>
          <input placeholder='ej:globo tuky'></input>
        </div>
        <div id='newPRoductImg'>
          <label id='imgLabel' for='productImgInput'>
            {'>imagen<'}
          </label>
          <input
            onChange={(e) => handlechange(e)}
            className='hidden'
            id='productImgInput'
            type='file'
          ></input>
          {img ? <img src={img} alt={img} /> : <></>}
        </div>
        <div>
          <label>precio</label>
          <input placeholder='ej:10.2'></input>
        </div>
        <div>
          <label>tamaño</label>
          <input list='sizesList' placeholder={`ej:10"`}></input>
          <datalist id='sizesList'>
            {filters.sizes?.map((size) => {
              return <option>{size}</option>;
            })}
          </datalist>
        </div>
        <div>
          <label>color</label>
          <input list='colorsList' placeholder={`ej:rojo,amarillo`}></input>
          <datalist id='colorsList'>
            {filters.colors?.map((color) => {
              return <option>{color}</option>;
            })}
          </datalist>
        </div>
        <div>
          <label>catalogo</label>
          <select>
            <option selected disabled>
              elija catalogo/s del producto
            </option>
            {catalogs?.map((catalog) => {
              return <option>{catalog.name.split('_').join(' ')}</option>;
            })}
          </select>
        </div>
        <div>
          <label>cantidad de unidades</label>
          <input list='quantitisList' placeholder={`ej:1`}></input>
          <datalist id='quantitisList'>
            {filters.cants?.map((quantity) => {
              return <option>{quantity}</option>;
            })}
          </datalist>
        </div>
        <div>
          <label>cantidad de stock disponible</label>
          <input placeholder='ej:5'></input>
        </div>
      </form>
      <button onClick={() => setShowForm(false)}>dar de alta</button>
    </div>
  ) : (
    <p className='display-6' onClick={() => setShowForm(true)}>
      {'>Dar de alta nuevo producto<'}
    </p>
  );
}
