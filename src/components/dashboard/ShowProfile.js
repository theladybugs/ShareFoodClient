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

  if (annonces && profile) {
    return (
      <div className="row">
        <div className="col-4">
          <div className="sidebar shadow">
            <img src={pic} alt="" className="img-thumbnail" />
            <h2 className="title-grey"> {profile.profile.username}</h2>

            <h6>
              <i className="fas fa-calendar-alt"></i>{" "}
              {profile.profile.createdAt.substring(0, 10)}
            </h6>
            <NavLink className=" btn btn-info " to="/edit_profile">
              Edit Profil
            </NavLink>
            <NavLink className="btn btn-danger" to="/delete_profile">
              Delete Profil
            </NavLink>
          </div>
        </div>
        <div className="col-8 fixed shadow">
          <h1>Mes Annonces</h1>
          <div className="row">
            {annonces
              .filter(annonce =>
                annonce.user._id
                  .toLowerCase()
                  .includes(localStorage.user.toLowerCase())
              )
              .map(annonce => (
                <div key={annonce._id} className="col-md-4">
                  <AnnonceItem key={annonce._id} annonce={annonce} />
                </div>
              ))}
          </div>
          <h1>Mes Réservations</h1>
          <div className="row">
            {annonces
              .filter(annonce =>
                annonce.Reserving_User.toLowerCase().includes(
                  localStorage.user.toLowerCase()
                )
              )
              .map(annonce => (
                <div key={annonce._id} className="col-md-4">
                  <AnnonceItem key={annonce._id} annonce={annonce} />
                </div>
              ))}
          </div>
        </div>
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
