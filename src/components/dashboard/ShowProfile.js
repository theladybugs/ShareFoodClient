import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const ShowProfile = props => {
  const [formData, setFormData] = useState({
    //Get Profile Info
  });
  return (
    <div>
      <h1>This is the profile page for user {localStorage.user}</h1>
      <NavLink className="nav-link" to="/edit_profile">
        Edit Profil
      </NavLink>
    </div>
  );
};

ShowProfile.propTypes = {};

export default ShowProfile;
