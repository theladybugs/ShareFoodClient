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
            <h2 className="title-grey"> {profile.profile.username}</h2>

            <h6>
              <i className="fas fa-calendar-alt"></i>{" "}
              {profile.profile.createdAt.substring(0, 10)}
            </h6>
          </div>
        </div>
        <div className="col-8 fixed shadow">
          <br />
          <h1 className="title-grey">Vos Statistiques</h1>
          <hr />
          <div className="row text-center">
            <div className="col">
              <div className="counter">
                <h2 className="title-grey">{mesAnnonces}</h2>
                <h1 className="features-icons">
                  <i className="far fa-handshake"></i>
                </h1>
                <h5 className="title-grey">Annonces Postée</h5>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <h2 className="title-grey">{mesReservations}</h2>
                <h1 className="features-icons">
                  <i className="far fa-calendar-check"></i>
                </h1>
                <h5 className="title-grey">Réservations Faites</h5>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <h2 className="title-grey">3</h2>
                <h1 className="features-icons">
                  <i className="fas fa-carrot"></i>
                </h1>
                <h5 className="title-grey"> Aliments Sauvés</h5>
              </div>
            </div>
            <div className="col">
              <div className="counter">
                <h2 className="title-grey">28</h2>
                <h1 className="features-icons">
                  <i className="fas fa-euro-sign"></i>
                </h1>
                <h5 className="title-grey">Economisés</h5>
              </div>
            </div>
          </div>
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
