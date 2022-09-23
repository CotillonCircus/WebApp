import axios from 'axios';
import  cloudinary from "cloudinary/lib/cloudinary";

export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_USER = 'GET_USER';
export const CHANGE_USER_STATUS = "CHANGE_USER_STATUS"
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID"
export const GET_ALL_CATALOGS = "GET_ALL_CATALOGS"
export const GET_ALL_AUTHS = "GET_ALL_AUTHS"
export const POST_NEW_PRODUCT = "POST_NEW_PRODUCT"
export const UPDATE_PRODUCT = "UPDATE_PRODUCT"



const cloud_name = "circus-corillon"
const api_key = "164947681452799"
const api_secret = "Ii4cdvwbN_kI8YNLnc0xMnAyyjw"

cloudinary.config({
  cloud_name:cloud_name,
  api_key: api_key,
  api_secret: api_secret,
});

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

export function getProductById (ID) {
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


export function getProductos({name="",catalogId="",color="",size="",cant="",alf="",price=""}) {
  return async function (dispatch) {
    try {
      const productos = (await axios.get('http://localhost:3001/product?name='+name+"&catalogId="+catalogId+"&color="+color+"&size="+size+"&cant="+cant+"&alf="+alf+"&price="+price))
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

export async function getRelated(name,setRelated) {
  try {
    const related = (await axios.get(`http://localhost:3001/product?name=${name}`)).data;
    setRelated(related)
  } catch (error) {
    console.log(error.message);
  }
}

export function getAllAuths () {
  return async function (dispatch) {
    try {
      const auths = (await axios.get('http://localhost:3001/auth'))
        .data;
      return dispatch({
        type: GET_ALL_AUTHS,
        payload: auths,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function getAllToFilter(setToFilter){
  try {
    const toFilter = (await axios.get(`http://localhost:3001/product/toFilter`)).data;
    setToFilter(toFilter) 
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCarrouselImgs(set){
  try {
    const imgs = (await axios.get(`http://localhost:3001/cloudinary/carrousel`)).data;
    set(imgs) 
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteCarrouselImg(id){
  try {
    await cloudinary.uploader.destroy(id,(succes,error)=>console.log({succes,error}))
  } catch (error) {
    console.log(error.message);
  }
}

export async function addCarrouselImg(e,imgs,setImgs){
  const file = e.target.files[0]
  try {
      if(file){
          const data = new FormData()
          data.append('file', file)
          data.append('upload_preset', 'carrousel')
          const created  = await axios.post("https://api.cloudinary.com/v1_1/circus-corillon/image/upload",data)
          setImgs([...imgs,created.data]) 
      }
  } catch (error) {
      console.log(error.message+"2");
  }
}

export async function newProductImg(file){
  try {
      if(file){
          const data = new FormData()
          data.append('file', file)
          data.append('upload_preset', 'products')
          const created  = await axios.post("https://api.cloudinary.com/v1_1/circus-corillon/image/upload",data)
          console.log(created.data)
          return created.data.url
      }
  } catch (error) {
      console.log(error.message+"2");
  }
}

export function createProduct (newProduct) {
  return async function (dispatch) {
    try {
      await axios.post('http://localhost:3001/product',newProduct);
      return dispatch({
        type: POST_NEW_PRODUCT,
        payload: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function getProductsAdmin(setProducts){
  try {
    const products = (await axios.get('http://localhost:3001/product')).data;
    setProducts(products)
  } catch (error) {
    console.log(error.message)
  }
}

export function updateProduct (updatedProduct) {
  return async function (dispatch) {
    try {
      await axios.put('http://localhost:3001/product',updatedProduct);
      return dispatch({
        type: UPDATE_PRODUCT,
        payload: "",
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}