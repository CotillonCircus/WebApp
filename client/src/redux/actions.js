import axios from 'axios';
import cloudinary from '../components/cloudinary/cloudinary';
export const GET_PRODUCTOS = 'GET_PRODUCTOS';
export const GET_ALL_PRODUCTOS = 'GET_ALL_PRODUCTOS';
export const GET_USER = 'GET_USER';
export const CHANGE_USER_STATUS = 'CHANGE_USER_STATUS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_PRODUCT_BY_ID = 'GET_PRODUCT_BY_ID';
export const GET_ALL_CATALOGS = 'GET_ALL_CATALOGS';
export const GET_ALL_AUTHS = 'GET_ALL_AUTHS';
export const POST_NEW_PRODUCT = 'POST_NEW_PRODUCT';
export const POST_NEW_PREFERENCE = 'POST_NEW_PREFERENCE';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const GET_ALL_ORDERS = "GET_ALL_ORDERS";

export function getLogin(user) {
  return async function (dispatch) {
    try {
      const userLogged = (await axios.post('/user', user))
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

export function changeUserStatus(sub, status) {
  return async function (dispatch) {
    try {
      const userChanged = (
        await axios.put('/user/status', { sub, status })
      ).data;
      return dispatch({
        type: CHANGE_USER_STATUS,
        payload: userChanged,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllUsers() {
  return async function (dispatch) {
    try {
      const users = (await axios.get('/user')).data;
      return dispatch({
        type: GET_ALL_USERS,
        payload: users,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getProductById(ID) {
  return async function (dispatch) {
    try {
      const product = (await axios.get(`/product/${ID}`))
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

export function getProductos({
  name = '',
  catalogId = '',
  color = '',
  size = '',
  cant = '',
  order = "name ASC"
}) {
  return async function (dispatch) {
    try {
      const productos = (
        await axios.get(
          '/product?name=' +
            name +
            '&catalogId=' +
            catalogId +
            '&color=' +
            color +
            '&size=' +
            size +
            '&cant=' +
            cant +
            '&order=' +
            order
        )
      ).data;
      return dispatch({
        type: GET_PRODUCTOS,
        payload: productos,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function getAllProductos() {
  return async function (dispatch) {
    try {
      const productos = (
        await axios.get(
          '/product')
      ).data;
      return dispatch({
        type: GET_ALL_PRODUCTOS,
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
      const catalogs = (await axios.get('/catalog')).data;
      return dispatch({
        type: GET_ALL_CATALOGS,
        payload: catalogs,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function getRelated(name, setRelated) {
  try {
    const related = (
      await axios.get(`/product?name=${name}`)
    ).data;
    setRelated(related);
  } catch (error) {
    console.log(error.message);
  }
}

export function getAllAuths() {
  return async function (dispatch) {
    try {
      const auths = (await axios.get('/auth')).data;
      return dispatch({
        type: GET_ALL_AUTHS,
        payload: auths,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function getAllToFilter(setToFilter) {
  try {
    const toFilter = (await axios.get(`/product/toFilter`))
      .data;
    setToFilter(toFilter);
  } catch (error) {
    console.log(error.message);
  }
}

export async function getCarrouselImgs(set) {
  try {
    const imgs = (await axios.get(`/cloudinary/carrousel`))
      .data;
    set(imgs);
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteCarrouselImg(id) {
  try {
    await cloudinary.uploader.destroy(id, (succes, error) =>
      console.log({ succes, error })
    );
  } catch (error) {
    console.log(error.message);
  }
}

export async function addCarrouselImg(e, imgs, setImgs) {
  const file = e.target.files[0];
  try {
    if (file) {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'carrousel');
      const created = await axios.post(
        'https://api.cloudinary.com/v1_1/circus-corillon/image/upload',
        data
      );
      setImgs([...imgs, created.data]);
    }
  } catch (error) {
    console.log(error.message + '2');
  }
}

export async function newProductImg(file) {
  try {
    if (file) {
      const data = new FormData();
      data.append('file', file);
      data.append('upload_preset', 'products');
      const created = await axios.post(
        'https://api.cloudinary.com/v1_1/circus-corillon/image/upload',
        data
      );
      console.log(created.data);
      return created.data.url;
    }
  } catch (error) {
    console.log(error.message + '2');
  }
}

export function createProduct(newProduct) {
  return async function (dispatch) {
    try {
      await axios.post('/product', newProduct);
      return dispatch({
        type: POST_NEW_PRODUCT,
        payload: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export function createPreference(cartItems,sub,redirectUrl) {

  return async function (dispatch) {
    try {
      const link = (
        await axios.post(
          '/payment/create_preference',
          {products:cartItems,sub,redirectUrl}
        )
      ).data.init_point;
      window.location.assign(link)
      return dispatch({
        type: POST_NEW_PREFERENCE,
        payload: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function getProductsAdmin(setProducts,{
  name = '',
  catalogId = "",
  colors = '',
  sizes = '',
  cants = '',
  order = ""
}) {
  try {
    const products = (
      await axios.get(
        '/product?name=' +
          name +
          '&catalogId=' +
          catalogId +
          '&color=' +
          colors +
          '&size=' +
          sizes +
          '&cant=' +
          cants +
          '&order=' +
          order +
          "&admin=true"
      )
    ).data;
    setProducts(products);
  } catch (error) {
    console.log(error.message);
  }
}

export function updateProduct(updatedProduct, setList) {
  return async function (dispatch) {
    try {
      await axios.put('/product', updatedProduct);
      setList && getProductsAdmin(setList);
      return dispatch({
        type: UPDATE_PRODUCT,
        payload: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export async function updateOrder(id,setUpdatedOrder,navigate){
  
  try {
    const updated = await axios.put("/order/"+id)
    setUpdatedOrder(updated.data)
    
  } catch (error) { 
    navigate("/home")
  }
}


export function getAllOrders({userName="",productName="",firstDate="",secondDate=""}){
  return async function (dispatch) {
      try{
        const orders = (await axios.get(`http://localhost:3001/order?userName=${userName}&productName=${productName}&firstDate=${firstDate}&seconDate=${secondDate}`)).data;
        return dispatch({
          type: GET_ALL_ORDERS,
          payload: orders
        });
    } catch(error){
      console.log(error.message)
    }
  }
  }

export async function putProductsGroup(products,prop,value,setList){

  const ids = products.map(product=>product.id)

  try {
    const updated = await axios.put("/product/group",{ids,prop,value})
    console.log(updated)
    setList(updated.data)
  } catch (error) {
    console.log(error.message)
  }
}

