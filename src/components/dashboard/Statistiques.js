import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonces } from "../../action/annonce";

function Statistiques({ getAnnonces, annonce: { annonces, loading } }) {
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
    <div>
      <h1>Test</h1>
      <Fragment>
        <h1 className="large text-primary">Annonces</h1>
        <p>Nombre d'annonces sur le site: {annonces.length}</p>

        <p>Nombre d'annonces que vous avez posté {mesAnnonces} </p>
        <p>Nombre d'annonces que vous avez réservé {mesReservations} </p>
      </Fragment>
    </div>
  );
}

Statistiques.propTypes = {
  getAnnonces: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  annonce: state.annonce
});
export default connect(mapStateToProps, { getAnnonces })(Statistiques);
