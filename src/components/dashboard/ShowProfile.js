import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getCurrentProfile } from "../../action/profile";
import { deleteProfile } from "../../action/profile";
import { getAnnonces } from "../../action/annonce";
import AnnonceItem from "../annonces/AnnonceItem";

const ShowProfile = ({
  getCurrentProfile,
  auth,
  profile,
  deleteProfile,
  getAnnonces,
  annonce: { annonces, loading }
}) => {
  useEffect(() => {
    getCurrentProfile(auth.jwt, auth.user._id);
  }, [getCurrentProfile]);
  useEffect(() => {
    getAnnonces();
  }, [getAnnonces]);
  const [] = useState({
    //Get Profile Info
    username: profile.profile.username,
    email: profile.profile.email,
    picture: profile.profile.picture
  });
  let pic = "http://localhost:1337/" + profile.profile.picture;

  if (annonces) {
    return (
      <div>
        <h1>This is the profile page for user {profile.profile.username}</h1>
        <h3>Email : {profile.profile.email}</h3>
        <img src={pic} alt="" />
        <h1>Mes Annonces</h1>
        <div>
          {annonces
            .filter(annonce =>
              annonce.user._id
                .toLowerCase()
                .includes(localStorage.user.toLowerCase())
            )
            .map(annonce => (
              <AnnonceItem key={annonce._id} annonce={annonce} />
            ))}
        </div>

        <h1>Mes Réservations</h1>
        <div>
          {annonces
            .filter(annonce =>
              annonce.Reserving_User.toLowerCase().includes(
                localStorage.user.toLowerCase()
              )
            )
            .map(annonce => (
              <AnnonceItem key={annonce._id} annonce={annonce} />
            ))}
        </div>
        <NavLink className="nav-link" to="/edit_profile">
          Edit Profil
        </NavLink>
        <NavLink className="nav-link" to="/delete_profile">
          Delete Profil
        </NavLink>
      </div>
    );
  }
};

ShowProfile.propTypes = {
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  getAnnonces: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  email: state.profile.email,
  profile: state.profile,
  annonce: state.annonce
});

export default connect(mapStateToProps, {
  getCurrentProfile,
  deleteProfile,
  getAnnonces
})(ShowProfile);
