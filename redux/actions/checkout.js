import callApi from "../../UtilityService/ApiConfigurations";
import { SET_ORDER_ID } from "./Contants";
import Swal from "sweetalert2";

export const createOrder = (data,cb)=> async dispatch=>{  
    try {
        const res = await callApi("orders","POST",data);

        if (res.code === "00") {
          dispatch({
            type: SET_ORDER_ID,
            payload: res.data.order_id
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

}