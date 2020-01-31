import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_ANNONCES,
  GET_ANNONCE,
  ANNONCES_ERROR,
  ANNONCE_ERROR,
  ADD_ANNONCE
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

// Add Annonce
export const test = ({
  Titre,
  Description,
  Adresse,
  DateLimite,
  DatePickup,
  Categorie,
  picture
}) => async dispatch => {
  console.log("add annonce");

  try {
    const res = await axios.post(
      "http://localhost:1337/annonces",
      {
        Titre: Titre,
        Description: Description,
        Adresse: Adresse,
        DateLimite: DateLimite,
        DatePickup: DatePickup,
        Categorie: Categorie,
        Picture: picture
      },
      {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      }
    );
    console.log(res);
    console.log(res.data);
    dispatch({
      type: ADD_ANNONCE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};
