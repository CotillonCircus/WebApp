import axios from 'axios';
export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_USER = 'GET_USER';
export const CHANGE_USER_STATUS = "CHANGE_USER_STATUS"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_ALL_CATALOGS = "GET_ALL_CATALOGS"

export function getLogin(user) {
  return async function (dispatch) {
    try {
      const userLogged = (await axios.post('http://localhost:3001/user', user))
        .data;
      return dispatch({
        type: GET_USER,
        payload: userLogged,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function changeUserStatus (sub,status) {
  return async function (dispatch) {
    try {
      const userChanged = (await axios.put('http://localhost:3001/user/status', {sub,status}))
        .data;
      return dispatch({
        type: CHANGE_USER_STATUS,
        payload: userChanged,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllUsers () {
  return async function (dispatch) {
    try {
      const users = (await axios.get('http://localhost:3001/user'))
        .data;
      return dispatch({
        type: GET_ALL_USERS,
        payload: users,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getRroductById (ID) {
  return async function (dispatch) {
    try {
      const product = (await axios.get(`http://localhost:3001/product/${ID}`))
        .data;
      return dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: product,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}


export function getProductos() {
  return async function (dispatch) {
    try {
      const productos = (await axios.get('http://localhost:3001/product'))
        .data;
      return dispatch({
        type: GET_PRODUCTOS,
        payload: productos,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getCatalogs() {
  return async function (dispatch) {
    try {
      const catalogs = (await axios.get('http://localhost:3001/catalog'))
        .data;
      return dispatch({
        type: GET_ALL_CATALOGS,
        payload: catalogs,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}