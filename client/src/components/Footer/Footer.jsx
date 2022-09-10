import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className='col-md'>Av. Godoy Cruz 65, Ciudad. Mendoza</div>
          <div className='col-md'>Tel: 0261-4236840</div>
          <div className='col-md footer_socials'>
            <a href='https://www.facebook.com/circus.cotillon' target='_blank'>
              <AiFillFacebook />
            </a>
            <a href='https://instagram.com/circus_cotillon' target='_blank'>
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
