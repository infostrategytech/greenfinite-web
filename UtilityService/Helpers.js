import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/actions/cart";
import { useDispatch } from "react-redux";
toast.configure();
export const formatMoney = (money) => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(money);
};

// export const onAddHandler = (id) => (dispatch) => {
//   console.log("epxor");
//   dispatch(addToCart(id));
//   toast.success("Item added in cart", {
//     position: toast.POSITION.TOP_CENTER,
//     autoClose: 1500,
//   });
// };
