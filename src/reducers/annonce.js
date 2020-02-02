import {
  GET_ANNONCES,
  ANNONCES_ERROR,
  GET_ANNONCE,
  ANNONCE_ERROR,
  ADD_ANNONCE,
  RESERVE_ANNONCE,
  ACCEPT_RESERVATION,
  REFUSE_RESERVATION
} from "../action/types";

const initialState = {
  annonces: [],
  annonce: null,
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ANNONCES:
      return {
        ...state,
        annonces: payload,
        loading: false
      };
    case GET_ANNONCE:
      return {
        ...state,
        annonce: payload,
        loading: false
      };
    case ADD_ANNONCE:
      return {
        ...state,
        annonces: payload,
        loading: false
      };
    case RESERVE_ANNONCE:
      return {
        ...state,
        annonce: payload,
        loading: false
      };
    case ACCEPT_RESERVATION:
      return {
        ...state,
        annonce: payload,
        loading: false
      };
    case REFUSE_RESERVATION:
      return {
        ...state,
        annonce: payload,
        loading: false
      };
    case ANNONCES_ERROR:
      return {
        ...state,
        error: payload,
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
