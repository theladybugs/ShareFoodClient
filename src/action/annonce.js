import axios from "axios";
import { setAlert } from "./alert";
import {
  GET_ANNONCES,
  GET_ANNONCE,
  ANNONCES_ERROR,
  ANNONCE_ERROR,
  ADD_ANNONCE,
  RESERVE_ANNONCE,
  ACCEPT_RESERVATION,
  REFUSE_RESERVATION
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
  picture,
  Statut_Annonce,
  user_id
}) => async dispatch => {
  console.log("add annonce");
  console.log(user_id);

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
        Picture: picture,
        Statut_Annonce: Statut_Annonce,
        user: {
          _id: localStorage.user
        }
      },
      {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      }
    );

    dispatch({
      type: ADD_ANNONCE,
      payload: res.data
    });

    dispatch(setAlert("Annonce ajoutée", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};

// Reservce
export const reserve = (User, id) => async dispatch => {
  console.log(User, id);

  try {
    const res = await axios.put(
      `http://localhost:1337/annonces/${id}`,
      {
        Reserving_User: User,
        Statut_Annonce: "Réservé",
        Statut_Reservation: "En Attente"
      },
      {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      }
    );

    dispatch({
      type: RESERVE_ANNONCE,
      payload: res.data
    });

    dispatch(setAlert("Annonce Réservé", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};

// Accept
export const accept = id => async dispatch => {
  console.log(id);

  try {
    const res = await axios.put(
      `http://localhost:1337/annonces/${id}`,
      {
        Statut_Reservation: "Acceptée"
      },
      {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      }
    );

    dispatch({
      type: ACCEPT_RESERVATION,
      payload: res.data
    });

    dispatch(setAlert("Réservation acceptée", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};

// Accept
export const refuse = id => async dispatch => {
  console.log(id);

  try {
    const res = await axios.put(
      `http://localhost:1337/annonces/${id}`,
      {
        Statut_Reservation: "",
        Statut_Annonce: "Disponible",
        Reserving_User: ""
      },
      {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      }
    );

    dispatch({
      type: REFUSE_RESERVATION,
      payload: res.data
    });

    dispatch(setAlert("Reservation Refusée", "success"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: ANNONCE_ERROR,
      payload: err
    });
  }
};
