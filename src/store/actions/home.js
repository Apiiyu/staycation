import { FETCH_HOME_PAGE } from "store/types";
import axios from "axios";

export const fetchHomePage = (url, page) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_HOME_PAGE,
      payload: {
        [page]: response.data
      }
    })

    return response.data
  })
}