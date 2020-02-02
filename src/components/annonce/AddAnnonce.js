import React, { Fragment, useState, setState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { test } from "../../action/annonce";
import PropTypes from "prop-types";
import axios from "axios";
import { browserHistory } from "../../index";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export function AddAnnonce({ test }) {
  let picture = "";
  const [formData, setFormData] = useState({
    //Check Hooks
    Titre: "",
    Description: "",
    Adresse: "",
    DateLimite: "",
    DatePickup: "",
    Categorie: "",
    Picture: "",
    Statut_Annonce: "Disponible"
  });

  const {
    Titre,
    Description,
    Adresse,
    DateLimite,
    DatePickup,
    Categorie,
    Picture,
    Statut_Annonce
  } = formData;
  const handleChange = e => {
    console.log(e);
    setFormData({
      [DatePickup]: e
    });
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    console.log("called");
    e.preventDefault();
    test({
      Titre,
      Description,
      Adresse,
      DateLimite,
      DatePickup,
      Categorie,
      picture,
      Statut_Annonce
    });
    console.log("called again");
  };
  const fileSelectedHandler = e => {
    const fd = new FormData();
    fd.append("files", e.target.files[0], e.target.files[0].name);
    axios
      .post("http://localhost:1337/upload/", fd, {
        headers: {
          Authorization: "Bearer " + [localStorage.token]
        }
      })
      .then(res => {
        picture += res.data[0].url;
        console.log(picture);
      })
      .catch(err => console.log("err response", err));
  };
  //If isAuthenticated

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>Ajouter une annonce</h3>
        <div className="form-group">
          <label>Titre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Entrez le titre"
            name="Titre"
            value={Titre}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Description"
            name="Description"
            value={Description}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your Address"
            name="Adresse"
            value={Adresse}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>DateLimite</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your DateLimite"
            name="DateLimite"
            value={DateLimite}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>DatePickup</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your DatePickup"
            name="DatePickup"
            value={DatePickup}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categorie</label>
          <label htmlFor="">Fruits</label>
          <input
            name="Categorie"
            type="radio"
            value="fruits"
            onChange={e => onChange(e)}
          />
          <label htmlFor="">Légumes</label>
          <input
            name="Categorie"
            value="légumes"
            type="radio"
            onChange={e => onChange(e)}
          />
          <label htmlFor="">Epicerie</label>
          <input
            name="Categorie"
            value="épicerie"
            type="radio"
            onChange={e => onChange(e)}
          />
          <label htmlFor="">Plats</label>
          <input
            name="Categorie"
            value="plats"
            type="radio"
            onChange={e => onChange(e)}
          />
        </div>
        <input
          type="file"
          name="Picture"
          onChange={e => fileSelectedHandler(e)}
        />

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

AddAnnonce.propTypes = {};

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { test })(AddAnnonce);
