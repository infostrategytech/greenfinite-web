import { GET_ALL_PRODUCTS, GET_SINGLE_PRODUCTS } from "./Contants";
import callApi from "../../UtilityService/ApiConfigurations";
import Swal from "sweetalert2";

// Get single product
export const getSingleProduct = (data, cb) => async (dispatch) => {
  try {
    const res = await callApi(`products/${data}`, "GET");

    if (res.code === "00") {
      dispatch({
        type: GET_SINGLE_PRODUCTS,
        payload: res.data,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occured",
        text: res.message,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occured",
      text: "Oops! something went wrong",
    });
  } finally {
    cb();
  }
};

// get all products
export const getAllProduct = (cb) => async (dispatch) => {
  try {
    const res = await callApi("products", "GET");

    if (res.code === "00") {
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res.data,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occured",
        text: res.message,
      });
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occured",
      text: "Oops! something went wrong",
    });
  } finally {
    cb();
  }
};
