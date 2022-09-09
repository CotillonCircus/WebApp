import axios from 'axios';
export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_USER = 'GET_USER';

export function getProductos() {
  return async function (dispatch) {
    try {
      const productos = (await axios.get('http://localhost:3001/products'))
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
