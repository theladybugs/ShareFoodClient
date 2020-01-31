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
    selectedCategorie: ""
  });
  const { selectedText, selectedAdresse, selectedCategorie } = state;
  const onChange = e => {
    console.log(e.target.value + e.target.name);
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const onChangeChecked = e => {
    console.log(e.target.value + e.target.name);
    setstate({ ...state, selectedCategorie: e.target.value });
  };

  return (
    <Fragment>
      <SearchBox onChange={onChange} onChangeChecked={onChangeChecked} />
      <h1 className="large text-primary">Annonces</h1>
      {annonces
        .filter(annonce =>
          annonce.Titre.toLowerCase().includes(selectedText.toLowerCase())
        )
        .filter(annonce =>
          annonce.Adresse.toLowerCase().includes(selectedAdresse.toLowerCase())
        )
        .filter(annonce =>
          annonce.Categorie.toLowerCase().includes(
            selectedCategorie.toLowerCase()
          )
        )
        .map(annonce => (
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
