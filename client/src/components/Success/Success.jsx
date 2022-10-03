import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {updateOrder} from "../../redux/actions"
import {useShoppingCart} from "../Context/ShoppingCartContext"


export default function Success(){
    const searchParams = useSearchParams()[0];
    const [order,setOrder] = useState()
    const navigate = useNavigate()
    const {setCartItems} = useShoppingCart()
    
    useEffect(()=>{
        updateOrder(searchParams.get("orderId"),setOrder,navigate)
    },[searchParams,navigate])

    useEffect(()=>{
        order&&setCartItems([])
    },[order,setCartItems])

    return order&&(
        <div>
            <span>compra realizada correctamente, desea ver el resumen?</span>
            <button onClick={()=>navigate("/myOrders")}>si</button>
            <button onClick={()=>navigate("/home")}>no</button>
        </div>
    )
}