import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonces } from "../../action/annonce";
import AnnonceItem from "./AnnonceItem";

const Annonces = ({ getAnnonces, annonce: { annonces, loading } }) => {
  useEffect(() => {
    getAnnonces();
  }, [getAnnonces]);
  return (
    <Fragment>
      <h1 className="large text-primary">Annonces</h1>
      {annonces.map(annonce => (
        <AnnonceItem key={annonce._id} annonce={annonce} />
      ))}
    </Fragment>
  );
};

Annonces.propTypes = {
  getAnnonces: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  annonce: state.annonce
});

export default connect(mapStateToProps, { getAnnonces })(Annonces);
