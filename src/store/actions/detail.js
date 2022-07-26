import { FETCH_DETAIL_PAGE } from "store/types";
import axios from "configs/axios";

export const fetchDetailPage = (endpoint, page) => (dispatch) => {
  return axios.get(endpoint).then((response) => {
    dispatch({
      type: FETCH_DETAIL_PAGE,
      payload: {
        [page]: response.data
      }
    })

    return response.data
  })
}