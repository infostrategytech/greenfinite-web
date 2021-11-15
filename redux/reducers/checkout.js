import { SET_ORDER_ID } from "../actions/Contants"

const initState = {
    orderId : ''
}

export const checkoutReducer = (state=initState,action)=>{
    switch(action.type){
        case SET_ORDER_ID:
            return {
                ...state,
                orderId: action.payload
            }
        default:
            return state
    }
}

