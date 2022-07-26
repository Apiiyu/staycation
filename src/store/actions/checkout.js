import axios from 'configs/axios';
import { CHECKOUT_BOOKING } from "store/types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  });
}; 

export const submitBooking = (payload) => () => {
  return axios.post(`/booking`, payload, {
    headers: {
      contentType: 'multipart/form-data'
    }
  })

}