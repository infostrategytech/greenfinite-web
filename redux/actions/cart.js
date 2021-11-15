import { ADD_TO_CART, ADJUST_QTY, REMOVE_FROM_CART } from "./Contants";

export const addToCart = (itemId) => {
  return {
    type: ADD_TO_CART,
    payload: itemId,
  };
};

export const removeFromCart = (itemId) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemId,
  };
};
export const adjustQuantity = (itemId) => {
  return {
    type: ADJUST_QTY,
    payload: itemId,
  };
};
