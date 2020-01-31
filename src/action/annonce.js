import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_ANNONCES,
  GET_ANNONCE,
  ANNONCES_ERROR,
  ANNONCE_ERROR
} from "./types";

// Get Annonces
export const getAnnonces = () => async dispatch => {
  try {
    const res = await axios.get("http://localhost:1337/annonces", {
      headers: {
        Authorization: "Bearer " + [localStorage.token]
      }
    });
    dispatch({
      type: GET_ANNONCES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ANNONCES_ERROR,
      payload: err
    });
  }
};

// Get Annonce
export const getAnnonce = id => async dispatch => {
  try {
    const res = await axios.get(`http://localhost:1337/annonces/${id}`, {
      headers: {
        Authorization: "Bearer " + [localStorage.token]
      }
    });
    //console.log(res.data);
    dispatch({
      type: GET_ANNONCE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};
