import {
  SET_ADDRESS,
  SET_ORDER_DETAILS,
  SET_ORDER_ID,
  SET_TRACKING_ID,
} from "../actions/Contants";

const initState = {
  orderId: "",
  orderDetails: {},
  address: {},
  payment_reference: "",
};

export const checkoutReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_ORDER_ID:
      return {
        ...state,
        orderId: action.payload,
      };
    case SET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload,
      };
    case SET_ADDRESS:
      return {
        ...state,
        address: action.payload,
      };
    case SET_TRACKING_ID:
      return {
        ...state,
        payment_reference: action.payload,
      };
    default:
      return state;
  }
};
