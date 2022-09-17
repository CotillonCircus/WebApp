import React from 'react';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import { FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container-fluid text-center'>
        <div className='row'>
          <div className='col-md'>
            <ImLocation /> Av. Godoy Cruz 65, Ciudad. Mendoza
          </div>
          <div className='col-md footer_center'>
            <div>
              <BsFillTelephoneFill /> 0261-4236840
            </div>
            <div>
              <MdEmail />
              <a
                href='mailto:ventascircuscotillon@gmail.com'
                target='_blank'
                rel='noreferrer'
              >
                ventascircuscotillon@gmail.com
              </a>
            </div>
          </div>
          <div className='col-md footer_socials'>
            <a
              href='https://www.facebook.com/circus.cotillon'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillFacebook size={30} style={{ fill: 'black' }} />
            </a>
            <a
              href='https://instagram.com/circus_cotillon'
              target='_blank'
              rel='noreferrer'
            >
              <AiFillInstagram size={30} style={{ fill: 'black' }} />
            </a>
            <a
              href='https://wa.me/542616537320'
              target='_blank'
              rel='noreferrer'
            >
              <FaWhatsappSquare size={30} style={{ fill: 'black' }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
