import React from "react";
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
      <div className="row">
        <div className="col-3 fixed">
          <div className="position">Profil</div>
          <div className="sidebar">
            <img
              src={"http://localhost:1337" + annonce.user.picture}
              alt="..."
              className="img-thumbnail"
            />
            <h1>{annonce.user.username}</h1>
            <h6>Membre depuis : {annonce.user.createdAt.substring(0, 10)}</h6>
          </div>
        </div>
        <div className="col-6 scrollit">
          <h1>Annonce : {annonce.Titre}</h1>
          <h4>De {annonce.user.username}</h4>
          <h4>Publiée le {annonce.createdAt.substring(0, 10)}</h4>
          <h4>
            Disponible le {annonce.DatePickup.substring(0, 10)} à{" "}
            {annonce.DatePickup.substring(11, 16)}
          </h4>
          <img src={annonce.Picture} alt="" className="img-product" />
          <p>{annonce.Description}</p>
        </div>
        <div className="col-3 fixed">
          <h6>Statut Annonce</h6>
          {annonce.Statut_Annonce == "Réservé" ? (
            localStorage.user == annonce.user._id ? (
              annonce.Statut_Reservation == "En Attente" ? (
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
                <div>Réservation Acceptée</div>
              )
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
          {annonce.Reserving_User == localStorage.user ? (
            <div>
              <h6>Statut Reservation</h6>
              <h6>{annonce.Statut_Reservation}</h6>
            </div>
          ) : (
            <div></div>
          )}
        </div>
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
