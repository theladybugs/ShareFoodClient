import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "moment";
import { connect } from "react-redux";
import { getAnnonce } from "../../action/annonce";
const AnnonceItem = ({
  auth,
  profile,
  annonce: { _id, Titre, Description, Adresse, Picture }
}) => (
  <Link to={`/annonces/` + _id} params={{ getAnnonce: getAnnonce(_id) }}>
    <div>
      <h4>{Titre}</h4>
      <p>{Description}</p>
      <p>Adresse {Adresse}</p>
      Link
      {/*<img src={"http://localhost:1337/" + Picture} alt="" />*/}
    </div>
  </Link>
);

AnnonceItem.propTypes = {};

const mapStateToProps = state => ({
  annonces: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
});

export default connect(mapStateToProps, {})(AnnonceItem);
