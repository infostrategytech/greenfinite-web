import { GET_SINGLE_PRODUCTS } from "../actions/Contants";

const initState = {
  products: [],
  product: {},
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SINGLE_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };

    default:
      return state;
  }
};
