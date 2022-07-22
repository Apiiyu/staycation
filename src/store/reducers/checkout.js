import { CHECKOUT_BOOKING } from '../types'

const initialState = null

export default function (state = initialState, action) {
  return action.type === CHECKOUT_BOOKING ? action.payload : state
}