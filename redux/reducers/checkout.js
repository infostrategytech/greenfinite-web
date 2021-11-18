import { SET_ADDRESS, SET_ORDER_DETAILS, SET_ORDER_ID } from "../actions/Contants"

const initState = {
    orderId : '',
    orderDetails: {},
    address: {}
}

export const checkoutReducer = (state=initState,action)=>{
    switch(action.type){
        case SET_ORDER_ID:
            return {
                ...state,
                orderId: action.payload
            }
        case SET_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            }
        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        default:
            return state
    }
}

