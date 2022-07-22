import { FETCH_HOME_PAGE } from "store/types";

const initialState = {
  landingPage: {
    hero: {
      travelers: 0,
      trasures: 0,
      cities: 0
    },
    mostPicked: [],
    categories: [],
    testimonial: {}
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_HOME_PAGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
