import { GET_PRODUCTOS, GET_USER } from './actions';

const initialState = {
  productos: [],
  userLogged: {},
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

    default:
      return state;
  }
}

export default reducer;
