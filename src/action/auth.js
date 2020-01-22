import axios from "axios";

import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";
import { setAlert } from "./alert";

// Register User
export const signUp = ({ username, email, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ username, email, password });

  try {
    const res = await axios.post("/auth/local/register", body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(err.message, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};
