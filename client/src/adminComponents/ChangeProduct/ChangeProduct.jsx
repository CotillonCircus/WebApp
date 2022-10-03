import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateProduct,
  getAllToFilter,
  newProductImg,
} from '../../redux/actions';
import './ChangeProduct.css';

export default function ChangeProduct({ productToChange, setShowForm }) {
  const { catalogs } = useSelector((state) => state);
  const [filters, setFilters] = useState({});
  const [changedProduct, setChangedProduct] = useState(productToChange);
  const [errors, setErrors] = useState({});
  const [productImg, setProductImg] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllToFilter(setFilters);
  }, []);

  function handleImgChange(e) {
    const file = e.target.files[0];
    setProductImg(file);
    const url = URL.createObjectURL(file);
    setChangedProduct({ ...changedProduct, img: url });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const modifiedProduct = { ...changedProduct, [name]: value };
    setChangedProduct(modifiedProduct);
    setErrors(validate(modifiedProduct));
  }

  function validate({ name, img, price, size, color, catalogId, cant, stock }) {
    const errors = {};
    if (!name) {
      errors.name = 'Ingresar nombre';
    }
    if (!img.length) {
      errors.img = 'Ingrese imagen';
    } else {
    }
    if (!price || parseFloat(price) < 0) {
      errors.price = 'Ingrese precio ( mayor a 0 )';
    }
    if (!size) {
      errors.size = 'Ingrese tamaño';
    }
    if (!color) {
      errors.color = 'Ingrese color';
    }
    if (!catalogId) {
      errors.catalogId = 'Ingrese catalogo';
    }
    if (!cant) {
      errors.cant = 'Ingrese cantidad';
    }
    if (!stock) {
      errors.stock = 'Ingrese stock';
    }
    return errors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (Object.entries(validate(changedProduct)).length) {
      alert('corriga errores');
    } else {
      const cloudImg = await newProductImg(productImg);
      const cloudProduct = { ...changedProduct, img: cloudImg };
      dispatch(updateProduct(cloudProduct));
      setShowForm(false);
    }
  }

  return (
    <div id='productFormDiv'>
      <form id='productForm' onSubmit={handleSubmit}>
        <div id='x'>
          <label>nombre</label>
          <input
            name='name'
            value={changedProduct.name}
            onChange={handleChange}
            placeholder='ej:globo tuky'
          ></input>
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div id='newPRoductImg'>
          <label id='imgLabel' for='productImgInput'>
            {'>imagen<'}
          </label>
          <input
            onChange={(e) => handleImgChange(e)}
            className='hidden'
            id='productImgInput'
            type='file'
          ></input>
          {changedProduct.img ? (
            <img src={changedProduct.img} alt='changedProduct.img' />
          ) : (
            <span>{errors.img}</span>
          )}
        </div>
        <div>
          <label>precio</label>
          <input
            type={'number'}
            min='0'
            name='price'
            value={changedProduct.price}
            onChange={handleChange}
            placeholder='ej:10.2'
          ></input>
          {errors.price && <span>{errors.price}</span>}
        </div>
        <div>
          <label>tamaño</label>
          <input
            name='size'
            value={changedProduct.size}
            onChange={handleChange}
            list='sizesList'
            placeholder={`ej:10"`}
          ></input>
          {errors.size && <span>{errors.size}</span>}
          <datalist id='sizesList'>
            {filters.sizes?.map((size) => {
              return <option>{size}</option>;
            })}
          </datalist>
        </div>
        <div>
          <label>color</label>
          <input
            name='color'
            value={changedProduct.color}
            onChange={handleChange}
            list='colorsList'
            placeholder={`ej:rojo,amarillo`}
          ></input>
          {errors.color && <span>{errors.color}</span>}
          <datalist id='colorsList'>
            {filters.colors?.map((color) => {
              return <option>{color}</option>;
            })}
          </datalist>
        </div>
        <div id='catalogEditZone'>
          <label>catalogo</label>
          <select
            name='catalogId'
            value={changedProduct.catalogId}
            onChange={handleChange}
          >
            <option selected disabled>
              elija catalogo/s del producto
            </option>
            {catalogs?.map((catalog) => {
              return (
                <option value={catalog.id}>
                  {catalog.name}
                  {/* {catalog.name.split('_').join(' ')} */}
                </option>
              );
            })}
          </select>
          {errors.catalogId && <span>{errors.catalogId}</span>}
        </div>
        <div>
          <label>cantidad de unidades</label>
          <input
            type={'number'}
            min='1'
            name='cant'
            value={changedProduct.cant}
            onChange={handleChange}
            list='quantitisList'
            placeholder={`ej:1`}
          ></input>
          {errors.cant && <span>{errors.cant}</span>}
          <datalist id='quantitisList'>
            {filters.cants?.map((quantity) => {
              return <option>{quantity}</option>;
            })}
          </datalist>
        </div>
        <div>
          <label>stock disponible</label>
          <input
            type={'number'}
            name='stock'
            value={changedProduct.stock}
            onChange={handleChange}
            placeholder='ej:5'
          ></input>
          {errors.stock && <span>{errors.stock}</span>}
        </div>
        <div id='editButtons'>
          <button type={'submit'}>actualizar</button>
          <button type={'button'} onClick={() => setShowForm(false)}>
            cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
