import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonces } from "../../action/annonce";

function Statistiques({ getAnnonces, profile, annonce: { annonces } }) {
  useEffect(() => {
    getAnnonces();
  }, [getAnnonces]);
  let mesReservations = annonces.filter(annonce =>
    annonce.Reserving_User.includes(localStorage.user)
  ).length;
  let mesAnnonces = annonces.filter(annonce =>
    annonce.user._id.includes(localStorage.user)
  ).length;
  return (
    <Fragment>
      <div className="row">
        <div className="col-4 fixed">
          <div className="sidebar shadow">
            <img
              src={profile.profile.picture}
              alt=""
              className="img-thumbnail"
            />
            <h1>Profile {profile.profile.username}</h1>
            <h3>Email : {profile.profile.email}</h3>
          </div>
        </div>
        <div className="col-8 fixed shadow">
          <h1 className="large text-primary">Annonces</h1>
          <p>Nombre d'annonces sur le site: {annonces.length}</p>

          <p>Nombre d'annonces que vous avez posté {mesAnnonces} </p>
          <p>Nombre d'annonces que vous avez réservé {mesReservations} </p>
        </div>
      </div>
    </Fragment>
  );
}

Statistiques.propTypes = {
  getAnnonces: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  annonce: state.annonce,
  profile: state.profile
});
export default connect(mapStateToProps, { getAnnonces })(Statistiques);
