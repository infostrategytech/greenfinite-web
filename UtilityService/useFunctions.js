import React, { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart } from "../redux/actions/cart";
import { useDispatch } from "react-redux";
toast.configure();

const useFunctions = () => {
  const notify = () => {
    toast.success("Item added in Cart", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: false,
      autoClose: 2000,
    });
  };

  return notify;
};

export default useFunctions;
