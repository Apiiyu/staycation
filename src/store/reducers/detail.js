import { FETCH_DETAIL_PAGE } from "store/types";

const initialState = {
  detailPage: {
    activities: [],
    bank: [],
    features: [],
    images: [],
    testimonial: {},
    categories: []
  }
};

export default function (state = initialState, action) {
  console.log(action, 'test')
  switch (action.type) {
    case FETCH_DETAIL_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
