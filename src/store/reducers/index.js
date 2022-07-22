import { combineReducers } from "redux";
import checkout from './checkout'
import home from "./home";
import detail from "./detail";

export default combineReducers({
  checkout,
  home,
  detail
})