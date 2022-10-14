import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  createProduct,
  getAllToFilter,
  newProductImg,
} from '../../redux/actions';
import { Button } from "react-bootstrap";
import './NewProduct.css';


export default function NewProduct() {
  const cleanNewProduct = {
    name: '',
    img: '',
    price: '',
    size: '',
    color: '',
    catalogId: '',
    cant: '',
    stock: '',
    secondaryImg:""
  };
  const { catalogs } = useSelector((state) => state);
  const [filters, setFilters] = useState({});
  const [newProduct, setNewProduct] = useState(cleanNewProduct);
  const [errors, setErrors] = useState({});
  const [productImg, setProductImg] = useState();
  const [productSecondaryImg, setProductSecondaryImg] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getAllToFilter(setFilters);
    setErrors(validate(cleanNewProduct));
  }, []);

  function handleImgChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProductImg(file);
      const url = URL.createObjectURL(file);
      setNewProduct({ ...newProduct, img: url });
    }
  }

  function handleSecondaryImgChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProductSecondaryImg(file);
      const url = URL.createObjectURL(file);
      setNewProduct({ ...newProduct, secondaryImg: url });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const changedNewProduct = { ...newProduct, [name]: value };
    setNewProduct(changedNewProduct);
    setErrors(validate(changedNewProduct));
  }

  function validate({ name, img, secondaryImg, price, size, color, catalogId, cant, stock }) {
    const errors = {};
    if (!name) {
      errors.name = 'Ingresar nombre';
    }
    if (!img.length) {
      errors.img = 'Ingrese imagen';
    } else {
    }
    if (!secondaryImg.length) {
      errors.secondaryImg = 'opcional';
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
    if (Object.entries(validate(newProduct)).length) {
      alert('corriga errores');
    } else {
      const cloudImg = await newProductImg(productImg);
      const cloudSecondaryImg = await newProductImg(productSecondaryImg);
      const cloudProduct = { ...newProduct, img: cloudImg,secondaryImg: cloudSecondaryImg };
      dispatch(createProduct(cloudProduct));
      setNewProduct({ ...cleanNewProduct });
      setErrors(validate(cleanNewProduct));
    }
  }

  return (
    <div id='productFormDiv'>
      <form id='productForm' onSubmit={handleSubmit}>
            <div className='simpleProp'>
              <label>nombre</label>
              <input
                id="nameInput"
                name='name'
                value={newProduct.name}
                onChange={handleChange}
                placeholder='ej:globo tuky'
              ></input>
            </div>
            <span>{errors.name||" "}</span>
            <div className='simpleProp'>
              <label>precio</label>
              <input
                type={'number'}
                min='0'
                name='price'
                value={newProduct.price}
                onChange={handleChange}
                placeholder='ej:10.2'
              ></input>
            </div>
            <span>{errors.price||" "}</span>
            <div className='simpleProp'>
              <label>tamaño</label>
              <input
                name='size'
                value={newProduct.size}
                onChange={handleChange}
                list='sizesList'
                placeholder={`ej:10"`}
              ></input>
              <datalist id='sizesList'>
                {filters.sizes?.map((size) => {
                  return <option>{size}</option>;
                })}
              </datalist>
            </div>
            <span>{errors.size||" "}</span>
            <div className='simpleProp'>
              <label>color</label>
              <input
                name='color'
                value={newProduct.color}
                onChange={handleChange}
                list='colorsList'
                placeholder={`ej:rojo,amarillo`}
                ></input>
              <datalist id='colorsList'>
                {filters.colors?.map((color) => {
                  return <option>{color}</option>;
                })}
              </datalist>
            </div>
            <span>{errors.color||" "}</span>
            <div id='catalogNewZone' className='simpleProp'>
              <label>catalogo</label>
              <select
                name='catalogId'
                value={newProduct.catalogId}
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
            </div>
            <span>{errors.catalogId||" "}</span>
            <div className='simpleProp'>
              <label>cantidad de unidades</label>
              <input
                type={'number'}
                min='1'
                name='cant'
                value={newProduct.cant}
                onChange={handleChange}
                list='quantitisList'
                placeholder={`ej:1`}
                ></input>
              <datalist id='quantitisList'>
                {filters.cants?.map((quantity) => {
                  return <option>{quantity}</option>;
                })}
              </datalist>
            </div>
            <span>{errors.cant||" "}</span>
            <div className='simpleProp'>
              <label>cantidad de stock disponible</label>
              <input
                type={'number'}
                name='stock'
                value={newProduct.stock}
                onChange={handleChange}
                placeholder='ej:5'
                ></input>
              
            </div>
            <span>{errors.stock||" "}</span>
            <div id='newProductImg' >
              <label id='imgLabel' for='productImgInput'>
                {'imagen'}<br></br>{"principal"}
              </label>
              <input
                onChange={(e) => handleImgChange(e)}
                className='hidden'
                id='productImgInput'
                type='file'
              ></input>
              {newProduct.img ? (
                <img src={newProduct.img} alt='newProduct.img' />
              ) : (
                <span>{errors.img}</span>
              )}
            </div>
            <div id='newProductSecondaryImg'>
              <label id='imgLabel' for='productSecondaryImgInput'>
                {'imagen'}<br></br>{"secundaria"}
              </label>
              <input
                onChange={(e) => handleSecondaryImgChange(e)}
                className='hidden'
                id='productSecondaryImgInput'
                type='file'
              ></input>
              {newProduct.secondaryImg ? (
                <img src={newProduct.secondaryImg} alt='newProduct.img' />
              ) : (
                <span>{errors.secondaryImg}</span>
              )}
          </div>
        <div id='optionsButtons'>
          <Button type={'submit'}>listo</Button>
        </div>
      </form>
    </div>
  );
}