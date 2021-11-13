import {
  ADD_TO_CART,
  GET_ALL_PRODUCTS,
  GET_SINGLE_PRODUCTS,
  REMOVE_FROM_CART,
  ADJUST_QTY,
} from "../actions/Contants";

const initState = {
  products: [],
  cart: [],
  product: {},
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

      const isInCart = state.cart.find((prod) => {
        console.log(prod);
        prod.product_id === action.payload;
        // console.log(action.payload, prod.product_id);
      });
      console.log(state.cart);
      console.log(isInCart, "incart");
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
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.itemId),
      };
    case ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};
