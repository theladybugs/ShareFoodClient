import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonce } from "../../action/annonce";
import { reserve } from "../../action/annonce";
import { accept } from "../../action/annonce";
import { refuse } from "../../action/annonce";
import { useEffect } from "react";

const AnnoncePage = ({
  getAnnonce,
  annonce: { annonce },
  match,
  reserve,
  accept,
  refuse
}) => {
  useEffect(() => {
    getAnnonce(match.params.id);
  }, [getAnnonce]);

  console.log(annonce);
  const onSubmit = async e => {
    e.preventDefault();
    reserve(localStorage.user, annonce._id);
    console.log(localStorage.user);
  };
  const onSubmit2 = async e => {
    e.preventDefault();
    accept(annonce._id);
    console.log("Accepter");
  };

  const onSubmit3 = async e => {
    e.preventDefault();
    refuse(annonce._id);
    console.log("Refuser");
  };

  if (annonce) {
    return (
      <div>
        <h1>This is the page : {annonce.Titre}</h1>
        <h4>Annonce de {annonce.user.username}</h4>
        {annonce.Statut_Annonce === "Réservé" ? (
          localStorage.user == annonce.user._id ? (
            <div>
              <form onSubmit={e => onSubmit2(e)}>
                <button type="submit" className="btn btn-primary">
                  Accepter la réservation
                </button>
              </form>
              <form onSubmit={e => onSubmit3(e)}>
                <button type="submit" className="btn btn-primary">
                  Refuser la réservation
                </button>
              </form>
            </div>
          ) : (
            <div>Annonce réservée</div>
          )
        ) : localStorage.user == annonce.user._id ? (
          <div>No reservation</div>
        ) : (
          <form onSubmit={e => onSubmit(e)}>
            <button type="submit" className="btn btn-primary">
              Réserver
            </button>
          </form>
        )}
        <img src={annonce.Picture} alt="" />

        <h1>Statut Reservation</h1>
        <h4>{annonce.Statut_Reservation}</h4>
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
AnnoncePage.propTypes = {
  getAnnonce: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired,
  reserve: PropTypes.func.isRequired,
  accept: PropTypes.func.isRequired,
  refuse: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  annonce: state.annonce
});

export default connect(mapStateToProps, {
  getAnnonce,
  reserve,
  accept,
  refuse
})(AnnoncePage);
