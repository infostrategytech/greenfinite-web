import callApi from "../../UtilityService/ApiConfigurations";
import { SET_ORDER_DETAILS, SET_ORDER_ID, SET_TRACKING_ID } from "./Contants";
import Swal from "sweetalert2";

export const createOrder = (data, cb) => async (dispatch) => {
  try {
    const res = await callApi("orders", "POST", data);
    console.log("res :", res);
    console.log("datadata :", data);
    console.log("status ", res);
    console.log("res.data.order_id :", res.data);

    if (res.code === "00") {
      dispatch({
        type: SET_ORDER_ID,
        payload: res.data,
      });
      cb(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occured",
        text: res.message,
      });
      cb(false);
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occured",
      text: "Oops! something went wrong",
    });
    cb(false);
  }
  //  finally {
  //     cb();
  // }
};

export const updateOrder = (data, id, cb) => async (dispatch) => {
  try {
    const res = await callApi(`orders/${id}`, "POST", data);
    console.log("update res :", res);

    if (res.code === "00") {
      dispatch({
        type: SET_ORDER_DETAILS,
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

export const updateOrderStatus = (data, id) => async (dispatch) => {
  try {
    console.log("Updating order status for id:", id);
    
    const res = await callApi(`orders/${id}`, "PUT", data);
    
    console.log("Updated data:", res);

    if (res.code === "00") {
      Swal.fire({
        icon: "success",
        title: "Successful",
        text: res.message,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error occurred",
        text: res.message,
      });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    
    Swal.fire({
      icon: "error",
      title: "Error occurred",
      text: `${error}`,
    });
  }
};
