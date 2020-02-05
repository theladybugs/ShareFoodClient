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
          <div className="sidebar shadow">
            <img
              src={"http://localhost:1337" + annonce.user.picture}
              alt="..."
              className="img-thumbnail"
            />
            <h2 className="title-grey"> {annonce.user.username}</h2>

            <h6>
              <i className="fas fa-calendar-alt"></i>{" "}
              {annonce.user.createdAt.substring(0, 10)}
            </h6>
          </div>
        </div>
        <div className="col-6 scrollit">
          <h1>{annonce.Titre}</h1>

          <h4 className="title-grey">
            <i className="fas fa-calendar-alt"></i>{" "}
            {annonce.DatePickup.substring(0, 10)} à{" "}
            {annonce.DatePickup.substring(11, 16)}
          </h4>
          <h4 className="title-grey">
            <i class="fas fa-map-marker-alt"></i> {annonce.Adresse}
          </h4>
          <img src={annonce.Picture} alt="" className="img-product" />
          <p>{annonce.Description}</p>
        </div>
        <div className="col-3 fixed shadow">
          <h3 className="title-grey">Statut Annonce</h3>
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
                <div>
                  {" "}
                  <h6 className={`text-center ` + annonce.Statut_Reservation}>
                    Réservation Acceptée
                  </h6>
                </div>
              )
            ) : (
              <div>
                {" "}
                <h6 className={`text-center ` + annonce.Statut_Annonce}>
                  Annonce réservée
                </h6>
              </div>
            )
          ) : localStorage.user == annonce.user._id ? (
            <div>
              {" "}
              <h6 className="text-center">Pas de réservations</h6>
            </div>
          ) : (
            <form onSubmit={e => onSubmit(e)}>
              <button type="submit" className="btn btn-success">
                Réserver
              </button>
            </form>
          )}
          <hr />
          {annonce.Reserving_User == localStorage.user ? (
            <div>
              <h3 className="title-grey">Statut Reservation</h3>
              <h6 className={`text-center ` + annonce.Statut_Reservation}>
                {annonce.Statut_Reservation}
              </h6>
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
