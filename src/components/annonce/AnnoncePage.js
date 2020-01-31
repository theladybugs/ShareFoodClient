import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonce } from "../../action/annonce";
import { useEffect } from "react";

const AnnoncePage = ({ getAnnonce, annonce: { annonce }, match }) => {
  useEffect(() => {
    getAnnonce(match.params.id);
  }, [getAnnonce]);
  console.log(annonce);
  if (annonce) {
    return (
      <div>
        <h1>This is the page : {annonce.Titre}</h1>
        <img src={annonce.Picture} alt="" />
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
AnnoncePage.propTypes = {
  getAnnonce: PropTypes.func.isRequired,
  annonce: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  annonce: state.annonce
});

export default connect(mapStateToProps, { getAnnonce })(AnnoncePage);
