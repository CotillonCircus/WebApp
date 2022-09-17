import React from 'react';
import "./ProductsCards.css"
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react';
import { getCatalogs } from '../../redux/actions';
import {Link} from "react-router-dom" 
import FilterSection from '../FiltersSection/FiltersSection';

const ProductsCards = () => {
    const dispatch = useDispatch()
    const {productos,catalogs} = useSelector(state=>state)

    useEffect(()=>{
        dispatch(getCatalogs())
    },[dispatch])

  return (
    <div id="Products">
        <FilterSection/>
        <div id="products">
            {
                productos?.map(p=>{
                    return(
                    <Link to={"/details/"+p.id} className='singleProduct'>
                        <img src={p.img}/>
                        <span>{p.name}</span>
                        <span>${p.price}</span>
                    </Link>)
                })
            }
        </div>
    </div>
  )
}

export default ProductsCards