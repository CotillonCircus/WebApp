import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllToFilter, getCatalogs, getProductsAdmin,putProductsGroup,updateProduct } from "../../redux/actions";
import ChangeProduct from "../ChangeProduct/ChangeProduct";
import "./ProductsList.css"

export default function ProductsList(){
    const [list,setList] = useState([])
    const[showList,setShowList] = useState(false)
    const [showForm,setShowForm] = useState(false)
    const [productToChange,setProductToChange] = useState({})
    const dispatch = useDispatch()
    const [toFilter,setToFilter] = useState()
    const [filters,setFilters] = useState({colors:[],sizes:[],cants:[],catalogId:{id:""}})
    const [groupEdit,setGroupEdit] = useState(["price",0])
    const {catalogs} = useSelector(state=>state)
    useEffect(()=>{
        dispatch(getCatalogs())
    },[dispatch])

    useEffect(()=>{
        getProductsAdmin(setList,{...filters,catalogId:filters.catalogId.id})
    },[showForm,showList,filters])

    useEffect(()=>{
        !toFilter&&getAllToFilter(setToFilter)
    },[toFilter])

    function editProductStatus({status,id}){
        const newStatus = status === "disponible"?"no disponible":"disponible"
        dispatch(updateProduct({status:newStatus,id},setList))
    }

    function deleteProduct(id){
        dispatch(updateProduct({status:"deleted",id},setList))
    }

    function deleteFilter(e){
        const {name,value} = e.target
        let newFilters
        if(name==="catalogId"){
            newFilters = {id:""}
        }else{
            newFilters = filters[name].filter(filter=>filter!==value)
        }
        setFilters({...filters,[name]:newFilters})
    }

    function updateFilter(e){
        const {name,value} = e.target
        let exist
        let newFilters
        if(name==="catalogId"){
            newFilters = catalogs.find(catalog=>parseInt(value)===catalog.id)
        }else{
            newFilters = [...filters[name]]
            exist = filters[name].includes(value)
            !exist&&newFilters.push(value)
        }
        setFilters({...filters,[name]:newFilters})
    }

    function handleGroupProp(e){
        setGroupEdit([e.target.value,0])
    }

    function handleGroupChange(e){
        setGroupEdit([groupEdit[0],e.target.value])
    }

    function updateProductsGroup(){
        const [prop,value] = groupEdit
        putProductsGroup(list,prop,value,setList)
    }

    return(
        <div id="adminProductsList">
            <p onClick={()=>setShowList(!showList)} className='display-6'>Lista de productos</p>
            {showList&&<div id="listProducts">
            <div id="filtersSelection">
                <b>FILTROS</b>
                <div>
                    <label>color</label>
                    <select name="colors" onChange={updateFilter}>
                        {
                            toFilter?.colors?.map((color)=><option value={color}>{color}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>cantidad</label>
                    <select name="cants" onChange={updateFilter}>
                        {
                            toFilter?.cants?.map((quantity)=><option value={quantity}>{quantity}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>tamaño</label>
                    <select name="sizes" onChange={updateFilter}>
                        {
                            toFilter?.sizes?.map((size)=><option value={size}>{size}</option>)
                        }
                    </select>
                </div>
                <div>
                    <label>catalogo</label>
                    <select name="catalogId" onChange={updateFilter}>
                        {
                            catalogs?.map((catalog)=><option value={catalog.id}>{catalog.name}</option>)  
                        }
                    </select>
                </div>
            </div>
            
            <div id="filtersSelected">
            <b>filtros aplicados: </b>
            {
                filters.colors.map((color)=><button onClick={deleteFilter} name="colors" value={color}><span>{color}</span> x</button>)
            }
            {
                filters.cants.map((quantity)=><button onClick={deleteFilter} name="cants" value={quantity}><span>{quantity}</span> x</button>)
            }
            {
                filters.sizes.map((size)=><button onClick={deleteFilter} name="sizes" value={size}><span>{size}</span> x</button>)
            }
            {
                filters.catalogId.id&&<button onClick={deleteFilter} name="catalogId" ><span>{filters.catalogId.name}</span> x</button>
            }
            </div>
            <div id="groupChange">
                <button onClick={updateProductsGroup}>EDITAR GRUPO</button>
                <div>
                    <select onChange={handleGroupProp}>
                        <option value={"price"}>precio</option>
                        <option value={"stock"}>stock</option>
                    </select>
                </div>
                <div>
                    <p>+</p><input onChange={handleGroupChange} type="number" value={groupEdit[1]} placeholder="ingrese cambio..."></input>
                </div>
            </div>
            <div>
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
            }
            </div>
            </div>}
            {
                showForm&&<ChangeProduct productToChange={productToChange} setShowForm={setShowForm}/>
            }
        </div>
    )
}