import React from "react"
import "./FiltersSection.css"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllToFilter, getProductos } from "../../redux/actions"

export default function FilterSection(){
    
    const {catalogs} = useSelector(state=>state)
    const [toFilter,SetToFilter] = useState({})
    const dispatch = useDispatch()
    const [filters,setFilters] = useState({
        catalogId:undefined,
        color:"",
        size:"",
        cant:"",
        alf:"",
        price:""
    })

    useEffect(()=>{
        getAllToFilter(SetToFilter)
        dispatch(getProductos({}))
    },[dispatch])

    const onClick = (e) => {
        let newFilters = {...filters,[e.target.name]:e.target.value}
        if(e.target.name==="alf"||e.target.name==="price"){
            newFilters[e.target.name]=e.target.value==="ASC"?"DESC":"ASC"
        }
        setFilters({...newFilters})
        dispatch(getProductos({...newFilters}))
    }

    const reset = ()=>{
        dispatch(getProductos({}))
    }



    return(
        <div id="FiltersSection">
            <div id="catalogs" className="filter">
            <span>categorias </span>
            {catalogs?.map(c=>{
                let value=c.name.split("_").join(" ")
                return(
                    <button name="catalogId" onClick={onClick} value={c.id}>{value}</button>
                )
            })}
            </div>
            <div id="colorsFilters" className="filter">
            <span>colores </span>
            {
                toFilter.colors?.map(c=><button onClick={onClick} value={c} name="color">{c}</button>)
            }
            </div>  
            <div id="cantsFilters" className="filter">
            <span>por cantidad </span>
            {
                toFilter.cants?.map(c=><button onClick={onClick} value={c} name="cant">{c}</button>)
            }
            </div>
            <div id="sizesFilters" className="filter">
            <span>tamanio </span>
            {
                toFilter.sizes?.map(c=><button onClick={onClick} value={c} name="size">{c}</button>)
            }
            </div>
            <div>
                <span>ordernar alfabeticamente</span>
                <button name="alf" onClick={onClick} value={filters.alf||"ASC"}>{filters.alf||"ASC"}</button>
            </div>
            <div>
                <span>ordernar por precios</span>
                <button name="price" onClick={onClick} value={filters.price||"ASC"}>{filters.price||"ASC"}</button>
            </div>
            <button onClick={reset}>reset</button>
        </div>
    )
}