import React, { useEffect, useState } from 'react';
import {
  addCarrouselImg,
  deleteCarrouselImg,
  getCarrouselImgs,
} from '../../redux/actions';
import './editCarrousel.css';
import cloudinary from 'cloudinary/lib/cloudinary';

const {REACT_APP_CLOUD_NAME,REACT_APP_API_KEY,REACT_APP_API_SECRET} = process.env
cloudinary.config({
  cloud_name: REACT_APP_CLOUD_NAME,
  api_key: REACT_APP_API_KEY,
  api_secret: REACT_APP_API_SECRET,
});

export default function EditCarrousel() {
  const [carrouselImgs, setImgs] = useState([]);

  useEffect(() => {
    getCarrouselImgs(setImgs);
  }, []);

  const deleteHandler = (e) => {
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
      <div id='carrouselImgs'>
        {Array.isArray(carrouselImgs)?carrouselImgs?.map((img) => {
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
        }):null}
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
