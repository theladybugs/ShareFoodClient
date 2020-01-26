import axios from "axios";
import { setAlert } from "./alert";

import { GET_PROFILE, PROFILE_ERROR } from "./types";

//Get current profile

export const getCurrentProfile = () => async dispatch => {
  const user_id = localStorage.getItem("user");
  const token = localStorage.getItem("token");
  try {
    const res = await axios.get("http://localhost:1337/users/" + user_id, {
      headers: {
        Authorization: "Bearer " + [token]
      }
    });
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
