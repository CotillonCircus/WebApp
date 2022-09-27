import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {updateOrder} from "../../redux/actions"
import {useShoppingCart} from "../Context/ShoppingCartContext"


export default function Succes(){
    const [searchParams, setSearchParams] = useSearchParams();
    const [order,setOrder] = useState()
    const navigate = useNavigate()
    const {setCartItems} = useShoppingCart()
    
    useEffect(()=>{
        updateOrder(searchParams.get("orderId"),setOrder,navigate)
    },[searchParams])

    useEffect(()=>{
        order&&setCartItems([])
    },[order])

    return order&&(
        <div>
            <span>compra realizada correctamente, desea ver el resumen?</span>
            <button onClick={()=>navigate("/myOrders")}>si</button>
            <button onClick={()=>navigate("/home")}>no</button>
        </div>
    )
}