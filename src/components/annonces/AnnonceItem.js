import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "moment";
import { connect } from "react-redux";
const AnnonceItem = ({
  auth,
  profile,
  annonce: { _id, Titre, Description, Adresse, Picture }
}) => (
  <div>
    <h4>{Titre}</h4>
    <p>{Description}</p>
    <img src={"http://localhost:1337/" + Picture} alt="" />
  </div>
);

AnnonceItem.propTypes = {};

const mapStateToProps = state => ({
  annonces: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
});

export default connect(mapStateToProps, {})(AnnonceItem);
