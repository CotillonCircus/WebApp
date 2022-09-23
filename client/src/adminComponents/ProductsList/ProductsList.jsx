import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getProductsAdmin } from "../../redux/actions";
import "./ProductsList.css"

export default function ProductsList(){
    const [list,setList] = useState([])
    const[showList,setShowList] = useState(false)

    useEffect(()=>{
        getProductsAdmin(setList)
    },[])

    return(
        <div id="adminProductsList">
            <p onClick={()=>setShowList(!showList)} className='display-6'>Lista de productos</p>
            {showList&&<div id="listProducts">
            <div id="listProps">
                <span>nombre</span>
                <span>precio</span>
                <span>tamaño</span>
                <span>color</span>
                <span>stock</span>
                <span>cantidad</span>
            </div>
            {   
                list?.map(product=>{
                    return(
                    <div className="singleListProduct">
                        <span>{product.name}</span>
                        <span>{product.price}</span>
                        <span>{product.size}</span>
                        <span>{product.color}</span>
                        <span>{product.stock}</span>
                        <span>{product.cant}</span>
                        <button>modificar</button>
                    </div>
                    )
                })
            }</div>}
        </div>
    )
}