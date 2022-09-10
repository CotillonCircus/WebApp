import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../redux/actions'
import "./detailsProduct.css"

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
        <div id="imgandredes">imgandredes</div>
        <div id="formanddetails">formanddetails</div>
      </div>
      <div id="facebookcoments">facebookcoments</div>
      <div id="relacionados">relacionados</div>
    </div>
  )
}

export default DetailsProduct