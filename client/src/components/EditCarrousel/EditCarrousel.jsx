import React, { useEffect, useState } from 'react';
import {
  addCarrouselImg,
  deleteCarrouselImg,
  getCarrouselImgs,
} from '../../redux/actions';
import './editCarrousel.css';
import cloudinary from 'cloudinary/lib/cloudinary';

const cloud_name = 'circus-corillon';
const api_key = '164947681452799';
const api_secret = 'Ii4cdvwbN_kI8YNLnc0xMnAyyjw';

cloudinary.config({
  cloud_name: cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

export default function EditCarrousel() {
  const [carrouselImgs, setImgs] = useState([]);

  useEffect(() => {
    getCarrouselImgs(setImgs);
  }, []);

  const deleteHandler = (e) => {
    console.log(e.target.value)
    deleteCarrouselImg(e.target.value);
    const filtered = carrouselImgs.filter(
      (img) => img.public_id !== e.target.value
    );
    setImgs([...filtered]);
  };

  const handleAdd = (e) => {
    if (e.target.files[0]) {
      addCarrouselImg(e, carrouselImgs, setImgs);
      const objectUrl = URL.createObjectURL(e.target.files[0]);
      setImgs([...carrouselImgs, { url: objectUrl }]);
    }
  };

  return (
    <div id='editCarrousel'>
      <p className='display-6'>Editar carrusel</p>
      <div id='carrouselImgs'>
        {carrouselImgs?.map((img) => {
          return (
            <div className='carrouselImg' key={img.url}>
              <img src={img.url} alt={img.url}></img>
              {img.public_id ? (
                <button onClick={deleteHandler} value={img.public_id}>
                  borrar
                </button>
              ) : (
                <span>cargando</span>
              )}
            </div>
          );
        })}
        <div id='addImgInput'>
          <label htmlFor='esto'>añadir</label>
          <input
            id='esto'
            type='file'
            accept='.jpg, .jpeg, .png'
            onChange={handleAdd}
          ></input>
        </div>
      </div>
    </div>
  );
}
