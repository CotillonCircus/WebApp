import { GET_PRODUCTOS, GET_USER,CHANGE_USER_STATUS,GET_ALL_USERS,GET_PRODUCT_BY_ID,GET_ALL_CATALOGS, GET_ALL_AUTHS } from './actions';

const initialState = {
  productos: [],
  userLogged: {},
  users:[],
  productDetails:{},
  catalogs:[],
  auths:[]
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_PRODUCTOS:
      return {
        ...state,
        productos: payload,
      };

    case GET_USER:
      return {
        ...state,
        userLogged: payload,
      };

    case CHANGE_USER_STATUS:
      return {
        ...state,
      };

    case GET_ALL_USERS:
      return {
        ...state,
        users:payload
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        productDetails:payload
      };
    
    case GET_ALL_CATALOGS:
      return {
        ...state,
        catalogs:payload
      };

    case GET_ALL_AUTHS:
      return {
        ...state,
        auths:payload
      };  
    default:
      return state;
  }
}

export default reducer;
