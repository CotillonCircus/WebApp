import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateProduct,
  getAllToFilter,
  newProductImg,
} from '../../redux/actions';
import './ChangeProduct.css';
import { Button } from "react-bootstrap";
import loading from "../../images/cargando.gif"

export default function ChangeProduct({ productToChange, setShowForm }) {
  const { catalogs } = useSelector((state) => state);
  const [filters, setFilters] = useState({});
  const [changedProduct, setChangedProduct] = useState(productToChange);
  const [errors, setErrors] = useState({});
  const [productImg, setProductImg] = useState();
  const [productSecondaryImg, setProductSecondaryImg] = useState();
  const [changeLoading,setChangeLoading] = useState(false)
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

  function handleSecondaryImgChange(e) {
    const file = e.target.files[0];
    if (file) {
      setProductSecondaryImg(file);
      const url = URL.createObjectURL(file);
      setChangedProduct({ ...changedProduct, secondaryImg: url });
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    const modifiedProduct = { ...changedProduct, [name]: value };
    setChangedProduct(modifiedProduct);
    setErrors(validate(modifiedProduct));
  }

  function validate({ name, img,secondaryImg, price, size, color, catalogId, cant, stock }) {
    const errors = {};
    if (!name) {
      errors.name = 'Ingresar nombre';
    }
    if (!img||!img.length) {
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
    setChangeLoading(true)
    e.preventDefault();
    if (Object.entries(validate(changedProduct)).length) {
      alert('corriga errores');
    } else {
      const cloudImg = await newProductImg(productImg);
      const cloudSecondaryImg = await newProductImg(productSecondaryImg);
      const cloudProduct = { ...changedProduct, img: cloudImg, secondaryImg: cloudSecondaryImg  };
      dispatch(updateProduct(cloudProduct,undefined,setChangeLoading));
      setShowForm(false);
    }
  }

  // useEffect()

  return (
    <div id='productFormDiv'>
      <form id='productForm' onSubmit={handleSubmit}>
        <div className='simpleProp'>
          <label>nombre</label>
          <input
            name='name'
            value={changedProduct.name}
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
            value={changedProduct.price}
            onChange={handleChange}
            placeholder='ej:10.2'
          ></input>  
        </div>
        <span>{errors.price||" "}</span>
        <div className='simpleProp'>
          <label>tamaño</label>
          <input
            name='size'
            value={changedProduct.size}
            onChange={handleChange}
            list='sizesList'
            placeholder={`ej:10"`}
          ></input>
          <datalist id='sizesList'>
            {filters.sizes?.map((size,i) => {
              return <option key={"changeSize" + size + i} >{size}</option>;
            })}
          </datalist>
        </div>
        <span>{errors.size||" "}</span>
        <div className='simpleProp'>
          <label>color</label>
          <input
            name='color'
            value={changedProduct.color}
            onChange={handleChange}
            list='colorsList'
            placeholder={`ej:rojo,amarillo`}
          ></input>
          <datalist id='colorsList'>
            {filters.colors?.map((color,i) => {
              return <option key={"changeColor" + color + i}>{color}</option>;
            })}
          </datalist>
        </div>
        <span>{errors.color||" "}</span>
        <div id='catalogEditZone' className='simpleProp'>
          <label>catalogo</label>
          <select
            name='catalogId'
            value={changedProduct.catalogId}
            onChange={handleChange}
          >
            {catalogs?.map((catalog) => {
              return (
                <option key={"changeCatalog" + catalog.name + catalog.id} value={catalog.id}>
                  {catalog.name}
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
            value={changedProduct.cant}
            onChange={handleChange}
            list='quantitisList'
            placeholder={`ej:1`}
          ></input>
          <datalist id='quantitisList'>
            {filters.cants?.map((quantity,i) => {
              return <option key={"changeQuantity" + quantity + i}>{quantity}</option>;
            })}
          </datalist>
        </div>
        <span>{errors.cant||" "}</span>
        <div className='simpleProp'>
          <label>stock disponible</label>
          <input
            type={'number'}
            name='stock'
            value={changedProduct.stock}
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
              {productToChange.img ? (
                <img src={productToChange.img} alt='newProduct.img' />
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
              {productToChange.secondaryImg ? (
                <img src={productToChange.secondaryImg} alt='newProduct.img' />
              ) : (
                <span>{errors.secondaryImg}</span>
              )}
          </div>
        {
          !changeLoading?
          <div id='editButtons'>
            <Button type={'submit'}>actualizar</Button>
            <Button type={'button'} onClick={() => setShowForm(false)}>
              cancelar
            </Button>
          </div>
          :
          <div id='editButtons'>
            <img src={loading} alt="loading.gif"/>  
          </div>
        }
      </form>
    </div>
  );
}
