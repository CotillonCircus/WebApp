import React from 'react';
import './carousel.css';
import Circus from '../../images/circus_cotillon_logo.jpg';
import Globo from '../../images/globox_perlado.jpg';
import Banderin from '../../images/liso_negro.jpg';
import { useState } from 'react';
import { getCarrouselImgs } from '../../redux/actions';
import { useEffect } from 'react';

const Carousel = () => {

  const [carrosuelImgs,setCarrosuelImgs] = useState([])  

  useEffect(()=>{
    getCarrouselImgs(setCarrosuelImgs)
  },[])

  return (
    <section
      id='carouselExampleIndicators'
      className='carousel slide carousel-fade'
      data-bs-ride='true'
    >
      {/* ===== Indicators ===== */}
      <div className='carousel-indicators'>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          data-bs-slide-to='0'
          className='off'
          aria-current='true'
          aria-label='Slide 1'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          className='active'
          data-bs-slide-to='1'
          aria-label='Slide 2'
        ></button>
        <button
          type='button'
          data-bs-target='#carouselExampleIndicators'
          className='off'
          data-bs-slide-to='2'
          aria-label='Slide 3'
        ></button>
        {
          carrosuelImgs?.map((img,i)=>{
            return(
              <button
                type='button'
                data-bs-target='#carouselExampleIndicators'
                className='off'
                data-bs-slide-to={(i+3).toString()}
                aria-label={'Slide '+((i+4).toString())}
              ></button>
            )
          })
        }
      </div>
      {/* ===== Images ===== */}
      <div className='carousel-inner'>
        <div className='carousel-item active'>
          <img src={Circus} className='d-block w-50 mx-auto' alt='logo' />
        </div>
        <div className='carousel-item'>
          <img src={Banderin} className='d-block w-50 mx-auto' alt='banderin' />
        </div>
        <div className='carousel-item'>
          <img src={Globo} className='d-block w-50 mx-auto' alt='globo' />
        </div>
        {
          carrosuelImgs?.map(img=>{
            return(
              <div className='carousel-item'>
                <img src={img.url} className='d-block w-50 mx-auto' alt='cloud img' />
              </div>
            )
          })
        }
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
