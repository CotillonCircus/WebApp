import { GET_PRODUCTOS } from "./actions";

const initialState = {
    productos:[]
}

function reducer(state= initialState, {type,payload}){
    switch(type){
        case "GET_PRODUCTOS":
            return{
                productos:payload,
            }
        
        default:
            return state
    }
}

export default reducer;