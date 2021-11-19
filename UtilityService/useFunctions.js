import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const useFunctions = () => {
  const notify = () => {
    toast.success("Item added to Cart", {
      position: toast.POSITION.TOP_RIGHT,
      hideProgressBar: false,
      autoClose: 2000,
    });
  };

  return notify;
};

export default useFunctions;
