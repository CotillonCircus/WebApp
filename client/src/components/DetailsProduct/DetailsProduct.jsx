import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../redux/actions'
import "./detailsProduct.css"
import {FaFacebookF,FaTwitter,FaPinterestP} from "react-icons/fa"

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
            <img src={img} alt="" />
          </div>
          <div id="mediaIcons">
            <span><FaFacebookF></FaFacebookF></span>
            <span><FaTwitter></FaTwitter></span>
            <span><FaPinterestP></FaPinterestP></span>
          </div>
        </div>
        <div id="rigthDetails">
          <div id="productDetails">
            <span id='productName'>MANTEL TELA VEGETAL FUCSIA 1,20X1,80M</span>
            <span id="productPrice">$329,90</span>
          </div>
        </div>
      </div>
      <div id="facebookcoments">facebookcoments</div>
      <div id="relacionados">relacionados</div>
    </div>
  )
}

export default DetailsProduct