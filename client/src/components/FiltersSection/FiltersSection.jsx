import React from "react"
import "./FiltersSection.css"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllToFilter, getProductos } from "../../redux/actions"

export default function FilterSection(){
    
    const initialFilter = {
        catalogId:undefined,
        color:[],
        size:[],
        cant:[],
        alf:"",
        price:""
    }
    const {catalogs,productos} = useSelector(state=>state)
    const [toFilter,SetToFilter] = useState({})
    const dispatch = useDispatch()
    const [filters,setFilters] = useState({...initialFilter})

    useEffect(()=>{
        getAllToFilter(SetToFilter)
        dispatch(getProductos({}))
    },[dispatch])

    const onClick = (e) => {
        let newFilters = {...filters}
        let value = e.target.value
        let name = e.target.name
        
        if(name==="alf"||name==="price"){
            newFilters[name]=value==="ASC"?"DESC":"ASC"
        }else{
            if(newFilters[name].includes(value)){
                newFilters[name]=newFilters[name].filter(f=>f!==value)
            }else{
                newFilters[name].push(value)
            }
        }
        console.log(newFilters)
        setFilters({...newFilters})
        dispatch(getProductos({...newFilters}))
    }

    const reset = ()=>{
        setFilters({...initialFilter})
        dispatch(getProductos({}))
    }



    return(
        <div id="FiltersSection">
            <div id="catalogs" className="filter">
            <span>categorias </span>
            {catalogs?.map(c=>{
                let value=c.name.split("_").join(" ")
                return(
                    <button key={value} name="catalogId" onClick={onClick} value={c.id}>{value}</button>
                )
            })}
            </div>
            <div id="colorsFilters" className="filter">
            <span>colores </span>
            {
                toFilter.colors?.map(c=>{
                    const stock = productos.filter(product=>product.color===c).length 
                    if(!stock)return<></>
                    return(
                        <div key={"color"+c} className="form-check">
                            <input name="color" className="form-check-input" onClick={onClick} type="checkbox" value={c} id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                            {c}
                            </label>
                            <label>{"("+stock+")"}</label>
                        </div>
                    )
                })
            }
            </div>  
            <div id="cantsFilters" className="filter">
            <span>por cantidad </span>
            {
                toFilter.cants?.map(c=>{
                    const stock = productos.filter(product=>product.cant===c).length 
                    if(!stock)return<></>
                    return(
                        <div key={"cant"+c} className="form-check">
                            <input name="cant" className="form-check-input" onClick={onClick} type="checkbox" value={c} id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                            {c}
                            </label>
                            <label>{"("+stock+")"}</label>
                        </div>
                    )
                })
            }
            </div>
            <div id="sizesFilters" className="filter">
            <span>tamanio </span>
            {
                toFilter.sizes?.map(c=>{
                    const stock = productos.filter(product=>product.size===c).length 
                    if(!stock)return<></>
                    return(
                        <div key={"size"+c} className="form-check">
                            <input name="size" className="form-check-input" onClick={onClick} type="checkbox" value={c} id="flexCheckDefault"/>
                            <label className="form-check-label" for="flexCheckDefault">
                            {c}
                            </label>
                            <label>{"("+stock+")"}</label>
                        </div>
                    )
                })
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