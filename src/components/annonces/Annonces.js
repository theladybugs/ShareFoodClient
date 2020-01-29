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
    selectedText: ""
  });
  const { selectedText } = state;
  const onChange = e => setstate({ ...state, [e.target.name]: e.target.value });

  return (
    <Fragment>
      <SearchBox onChange={onChange} />
      <h1 className="large text-primary">Annonces</h1>
      {annonces
        .filter(annonce =>
          annonce.Titre.toLowerCase().includes(selectedText.toLowerCase())
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
