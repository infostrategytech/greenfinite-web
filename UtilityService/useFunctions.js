import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/actions/cart";
import { useDispatch } from "react-redux";
toast.configure();

const useFunctions = (props) => {
  const notify = () => {
    toast.success("Item added in Cart", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: true,
      autoClose: 1700,
    });
  };

  return notify;
};

export default useFunctions;
