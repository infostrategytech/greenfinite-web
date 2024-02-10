import callApi from "../../UtilityService/ApiConfigurations";
import {
  SET_ORDER_DETAILS,
  SET_ORDER_ID,
  SET_TRACKING_ID,
  UPDATE_ORDER_STATUS,
} from "./Contants";
import Swal from "sweetalert2";

export const createOrder = (data, cb) => async (dispatch) => {
  try {
    const res = await callApi("orders", "POST", data);
    console.log("res :", res);

    if (res.code === "00") {
      dispatch({
        type: SET_ORDER_ID,
        payload: res.data,
      });
      cb({ status: "success", data: res.data });
      return;
    }
    throw new Error(res.message);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occured",
      text: error.message,
    });
    cb({ status: "fail" });
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

export const updateOrderStatus = (id, cb) => async (dispatch) => {
  try {
    console.log("Updating order status for id:", id);

    const res = await callApi(`orders/${id}`, "PUT", { payment_reference: id });
    if (res.code === "00") {
      console.log("respponse response:", res)
      dispatch({
        type: SET_TRACKING_ID,
        payload: res.data
      })
    
      dispatch({
        type: UPDATE_ORDER_STATUS,
        payload: res.data,
      });

      cb({ status: "success", data: res.data });
      return;
    }
    throw new Error(res.message);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occurred",
      text: error.message,
    });
    cb({ status: "fail" });
  }
};

export const orderReceipt = (id, cb) => async (dispatch) => {
  try {
    console.log("Updating order status for id:", id);

    const res = await callApi(`order-record/${id}`, "GET");

    console.log("Updated data:", res);

    if (res.code === "00") {
      cb({ status: "success", data: res.data });
      return;
    }
    throw new Error(res.message);
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error occurred",
      text: error.message,
    });
    cb({ status: "fail" });
  }
};
