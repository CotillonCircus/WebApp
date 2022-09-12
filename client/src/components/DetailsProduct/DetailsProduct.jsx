import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../redux/actions'
import "./detailsProduct.css"
import {FaFacebookF,FaTwitter,FaPinterestP,FaCcVisa,FaCcMastercard,FaCreditCard} from "react-icons/fa"
import {SiAmericanexpress} from "react-icons/si"

const img = "https://d2r9epyceweg5n.cloudfront.net/stores/001/156/993/products/fucsia1-9304b057a0c7c113d415886127367996-1024-1024.jpg"

const DetailsProduct = () => {

  
  const {isAuthenticated}  = useAuth0()
  const {productDetails} = useSelector(state=>state)
  const dispatch = useDispatch()
  const {ID} = useParams()

  useEffect(()=>{
    ID&&dispatch(getProductById(ID))
  },[dispatch,ID])

  // if(!isAuthenticated){
  //   return <span>autentiquese</span>
  // }

  return productDetails&&(
    <div id="detailsPage">
      <span>direccion</span>
      <div id="detailsContainer">
        <div id="leftDetails">
          <div id="productImg">
            <img src={productDetails.img} alt="" />
          </div>
          <div id="mediaIcons">
            <span><FaFacebookF/></span>
            <span><FaTwitter/></span>
            <span><FaPinterestP/></span>
          </div>
        </div>
        <div id="rigthDetails">
          <div id="productDetails">
            <span id='productName'>{productDetails.name} {productDetails.color} {productDetails.size||24}" X{productDetails.cant||20}</span>
            <span id="productPrice">${productDetails.price}</span>
          </div>
          <div id="payWays">
            <div>
              <span className="bold">24 </span><span>CUOTAS DE</span><span className="bold"> ${productDetails.price/24}</span>
            </div>
            <div id="payIcons">
              <FaCcVisa className="payIcon"/>
              <FaCcMastercard className="payIcon"/>
              <SiAmericanexpress className="payIcon"/>
              <FaCreditCard className="payIcon"/>
            </div>
            <span>VER MEDIOS DE PAGO</span>
          </div>
          <div id="payForm">
              formulario de pago
          </div>
        </div>
      </div>
      <div id="facebookcoments">facebookcoments</div>
      <div id="relacionados">relacionados</div>
    </div>
  )
}

export default DetailsProduct