import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAnnonces } from "../../action/annonce";
import AnnonceItem from "./AnnonceItem";
import SearchBox from "./SearchBox";

const Annonces = ({ getAnnonces, annonce: { annonces, loading } }) => {
  useEffect(() => {
    getAnnonces();
  }, [getAnnonces]);

  const [state, setstate] = useState({
    selectedText: "",
    selectedAdresse: "",
    selectedCategorie: "",
    selectedStatut: ""
  });
  const {
    selectedText,
    selectedAdresse,
    selectedCategorie,
    selectedStatut
  } = state;
  const onChange = e => {
    console.log(e.target.value + e.target.name);
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const onChangeChecked = e => {
    console.log(e.target.value + e.target.name);
    setstate({ ...state, selectedCategorie: e.target.value });
  };
  const onChangeChecked2 = e => {
    console.log(e.target.value + e.target.name);
    setstate({ ...state, selectedStatut: e.target.value });
  };

  return (
    <Fragment>
      <div className="row">
        <div className="col-3 fixed">
          <div className="position">
            <h3>
              Filtres <i className="fas fa-filter"></i>
            </h3>

            <div className="sidebar">
              <SearchBox
                onChange={onChange}
                onChangeChecked={onChangeChecked}
                onChangeChecked2={onChangeChecked2}
              />
            </div>
          </div>
        </div>
        <div className="col-9 scrollit">
          <h3>Produits</h3>
          <div id="first">
            <div className="row">
              {annonces
                .filter(annonce =>
                  annonce.Titre.toLowerCase().includes(
                    selectedText.toLowerCase()
                  )
                )
                .filter(annonce =>
                  annonce.Adresse.toLowerCase().includes(
                    selectedAdresse.toLowerCase()
                  )
                )
                .filter(annonce =>
                  annonce.Categorie.toLowerCase().includes(
                    selectedCategorie.toLowerCase()
                  )
                )
                .filter(annonce =>
                  annonce.Statut_Annonce.toLowerCase().includes(
                    selectedStatut.toLowerCase()
                  )
                )
                .map(annonce => (
                  <div key={annonce._id} className="col-md-4">
                    <AnnonceItem key={annonce._id} annonce={annonce} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
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
