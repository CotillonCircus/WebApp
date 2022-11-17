import React from 'react';
import './carousel.css';
import { useState } from 'react';
import { getCarrouselImgs } from '../../redux/actions';
import { useEffect } from 'react';

const Carousel = () => {
  const [carrosuelImgs, setCarrosuelImgs] = useState([]);

  useEffect(() => {
    getCarrouselImgs(setCarrosuelImgs);
  }, []);

  if(!carrosuelImgs.length)return <section id='carouselExampleIndicators'></section>
  return (
    <section
      id='carouselExampleIndicators'
      className='carousel carousel-dark slide carousel-fade'
      data-bs-ride='true'
    >
      {/* ===== Indicators ===== */}
      <div className='carousel-indicators'>
        {carrosuelImgs?.map((img, i) => {
          if(i===0){
            return (<button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to='0'
              className='active'
              aria-current='true'
              aria-label='Slide 1'
              key={"img.button "+ 0}
            ></button>
            )
          }
          return (
            <button
              type='button'
              data-bs-target='#carouselExampleIndicators'
              data-bs-slide-to={(i).toString()}
              className='off'
              aria-label={'Slide ' + (i + 1).toString()}
              key={'img.button' + i}
            ></button>
          );
        })}
      </div>
      {/* ===== Images ===== */}
      <div className='carousel-inner'>
        {carrosuelImgs?.map((img,i) => {
          if(i===0){
            return (
              <div className='carousel-item active' key={img.url}>
                <img
                  src={img.url}
                  className='d-block w-50 mx-auto img-fluid'
                  alt='cloud img'
                />
              </div>
            );
          }else{
            return (
              <div className='carousel-item' key={img.url}>
                <img
                  src={img.url}
                  className='d-block w-50 mx-auto'
                  alt='cloud img'
                />
              </div>
            );
          }
        })}
      </div>

      {/* ===== Lateral controls ===== */}
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleIndicators'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </section>
  );
};

export default Carousel;
