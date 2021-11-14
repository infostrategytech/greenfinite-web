import {
  ADD_TO_CART,
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCTS,
  REMOVE_FROM_CART,
  ADJUST_QTY,
  GET_ID,
} from "../actions/Contants";

const initState = {
  products: [],
  cart: [],
  product: {},
  id: "",
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case GET_SINGLE_PRODUCTS:
      return {
        ...state,
        product: action.payload,
      };
    case ADD_TO_CART:
      const item = state.products.find(
        (prod) => prod.product_id === action.payload
      );

      const isInCart = state.cart.find((item) =>
        item.product_id === action.payload ? true : false
      );

      return {
        ...state,
        cart: isInCart
          ? state.cart.map((item) =>
              item.product_id === action.payload
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ADJUST_QTY:
      //   const item = state.products.find(
      //     (prod) => prod.product_id === action.payload
      //   );

      //   const isInCart = state.cart.find((item) =>
      //     item.product_id === action.payload ? true : false
      //   );

      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product_id === action.payload
            ? { ...item, qty: item.qty - 1 }
            : item
        ),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.product_id !== action.payload),
      };
    // case ADJUST_QTY:
    //   return {
    //     ...state,
    //     cart: state.cart.map((item) => {
    //       console.log(item);
    //       item.product_id === action.payload.itemId
    //         ? { ...item, qty: action.payload.qty }
    //         : item;
    //     }),
    // cart: state.cart.map((item) => {
    //   console.log(item);
    // }),
    //   };
    case GET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};
