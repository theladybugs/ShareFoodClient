import { GET_ANNONCE, ANNONCE_ERROR } from "../action/types";

const initialState = {
  annonces: [],
  annonce: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ANNONCE:
      return {
        ...state,
        annonces: payload,
        loading: false
      };
    case ANNONCE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
