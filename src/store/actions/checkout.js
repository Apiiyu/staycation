import { CHECKOUT_BOOKING } from "store/types";
import { push } from "react-router-redux";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload
  })

  push('/checkout')
}