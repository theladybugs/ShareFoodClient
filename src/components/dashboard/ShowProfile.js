import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
import { deleteProfile } from "../../action/profile";
const ShowProfile = ({ getCurrentProfile, auth, profile, deleteProfile }) => {
  useEffect(() => {
    getCurrentProfile(auth.jwt, auth.user._id);
  }, [getCurrentProfile]);
  const [] = useState({
    //Get Profile Info
    username: profile.profile.username,
    email: profile.profile.email,
    picture: profile.profile.picture
  });
  let pic = "http://localhost:1337/" + profile.profile.picture;
  return (
    <div>
      <h1>This is the profile page for user {profile.profile.username}</h1>
      <h3>Email : {profile.profile.email}</h3>
      <img src={pic} alt="" />
      <NavLink className="nav-link" to="/edit_profile">
        Edit Profil
      </NavLink>
      <NavLink className="nav-link" to="/delete_profile">
        Delete Profil
      </NavLink>
    </div>
  );
};

ShowProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  email: state.profile.email,
  profile: state.profile
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteProfile
})(ShowProfile);
