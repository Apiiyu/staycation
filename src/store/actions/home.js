import { FETCH_HOME_PAGE } from "store/types";
import axios from "configs/axios";

export const fetchHomePage = (endpoint, page) => (dispatch) => {
  return axios.get(endpoint).then((response) => {
    dispatch({
      type: FETCH_HOME_PAGE,
      payload: {
        [page]: response.data
      }
    })

    return response.data
  })
}