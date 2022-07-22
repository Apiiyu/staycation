import { FETCH_DETAIL_PAGE } from "store/types";
import axios from "axios";

export const fetchDetailPage = (url, page) => (dispatch) => {
  return axios.get(url).then((response) => {
    dispatch({
      type: FETCH_DETAIL_PAGE,
      payload: {
        [page]: response.data
      }
    })

    return response.data
  })
}