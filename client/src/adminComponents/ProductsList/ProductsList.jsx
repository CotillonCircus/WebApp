import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsAdmin,updateProduct } from "../../redux/actions";
import ChangeProduct from "../ChangeProduct/ChangeProduct";
import "./ProductsList.css"

export default function ProductsList(){
    const [list,setList] = useState([])
    const[showList,setShowList] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const [productToChange,setProductToChange] = useState({})
    const dispatch = useDispatch()

    useEffect(()=>{
        getProductsAdmin(setList)
    },[showForm,showList])

    function editProductStatus({status,id}){
        const newStatus = status === "disponible"?"no disponible":"disponible"
        dispatch(updateProduct({status:newStatus,id},setList))
    }

    function deleteProduct(id){
        dispatch(updateProduct({status:"deleted",id},setList))
    }

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
                <span>cant</span>
                <span>status</span>
                <span>editar</span>
                {/* <span></span> */}
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
                        <span onClick={()=>editProductStatus(product)}>{product.status}</span>
                        <button onClick={()=>{setProductToChange(product);setShowForm(true)}}>modificar</button>
                        <button onClick={()=>{deleteProduct(product.id)}}>eliminar</button>
                    </div>
                    )
                })
            }</div>}
            {
                showForm&&<ChangeProduct productToChange={productToChange} setShowForm={setShowForm}/>
            }
        </div>
    )
}