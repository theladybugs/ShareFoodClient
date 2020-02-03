import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Moment from "moment";
import { connect } from "react-redux";
import { getAnnonce } from "../../action/annonce";
const AnnonceItem = ({
  auth,
  profile,
  annonce: {
    _id,
    Titre,
    Description,
    Adresse,
    Picture,
    Categorie,
    Statut_Annonce
  }
}) => (
  <Link to={`/annonces/` + _id} params={{ getAnnonce: getAnnonce(_id) }}>
    <div className="card mb-4 box-shadow">
      <img
        className="card-img-top"
        alt="Thumbnail [100%x225]"
        src={"http://localhost:1337/" + Picture}
        data-holder-rendered="true"
      />
      <div className="card-body">
        <h4 className="card-text">
          {" "}
          {Categorie == "légumes" ? (
            <i class="fas fa-carrot"></i>
          ) : Categorie == "plats" ? (
            <i class="fas fa-pizza-slice"></i>
          ) : Categorie == "fruits" ? (
            <i class="fas fa-apple-alt"></i>
          ) : (
            <i class="fas fa-cookie"></i>
          )}{" "}
          {Titre}
        </h4>
        <p className="card-text">{Description}</p>

        <span className="card-text">{Statut_Annonce}</span>
      </div>
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
