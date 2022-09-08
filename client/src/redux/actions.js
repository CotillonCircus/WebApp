import axios from "axios"
export const GET_PRODUCTOS = "get productos"

export function getProductos(){

    return async function(dispatch){
        try{
            const productos = (await axios.get("http://localhost:3001/products")).data
            return dispatch({
                type:GET_PRODUCTOS,
                payload:productos
            })
        }catch(error){
            console.log(error.message)
        }
    }

}