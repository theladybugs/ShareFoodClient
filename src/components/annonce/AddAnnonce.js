import React, { Fragment, useState, setState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { test } from "../../action/annonce";
import { getCurrentProfile } from "../../action/profile";

import axios from "axios";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";

export function AddAnnonce({ getCurrentProfile, test, profile, auth }) {
  useEffect(() => {
    getCurrentProfile(auth.jwt, auth.user._id);
    console.log("Profile On" + auth.user_id);
  }, [getCurrentProfile]);
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
      Statut_Annonce,
      user_id
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
  let user_id = profile._id;
  console.log("Test" + user_id);
  //If isAuthenticated

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Ajouter une annonce</h5>
                <form className="form-signin" onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label htmlFor="Titre">Titre</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Entrez le titre"
                      name="Titre"
                      value={Titre}
                      id="Titre"
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Description"
                      name="Description"
                      id="Description"
                      value={Description}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Adresse">Adresse</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your Address"
                      name="Adresse"
                      id="Adresse"
                      value={Adresse}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="DateLimite">DateLimite</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your DateLimite"
                      name="DateLimite"
                      id="DateLimite"
                      value={DateLimite}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="DatePickup">DatePickup</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your DatePickup"
                      name="DatePickup"
                      value={DatePickup}
                      id="DatePickup"
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Categorie</label>
                    <br />
                    <label className="categories" htmlFor="Fruits">
                      {" "}
                      <i className="fas fa-apple-alt"></i> Fruits{"  "}
                    </label>
                    <input
                      name="Categorie"
                      type="radio"
                      value="fruits"
                      id="Fruits"
                      onChange={e => onChange(e)}
                    />{" "}
                    <br />
                    <label className="categories" htmlFor="Légumes">
                      <i className="fas fa-carrot"></i> Légumes{"  "}
                    </label>
                    <input
                      name="Categorie"
                      value="légumes"
                      type="radio"
                      id="Légumes"
                      onChange={e => onChange(e)}
                    />{" "}
                    <br />
                    <label className="categories" htmlFor="Epicerie">
                      <i className="fas fa-cookie"></i> Epicerie{"  "}
                    </label>
                    <input
                      name="Categorie"
                      value="épicerie"
                      type="radio"
                      id="Epicerie"
                      onChange={e => onChange(e)}
                    />{" "}
                    <br />
                    <label className="categories" htmlFor="Plats">
                      <i className="fas fa-pizza-slice"></i> Plats{"  "}
                    </label>
                    <input
                      name="Categorie"
                      value="plats"
                      type="radio"
                      id="Plats"
                      onChange={e => onChange(e)}
                    />
                  </div>
                  <label htmlFor="Image">Ajouter une image</label>
                  <input
                    type="file"
                    name="Picture"
                    onChange={e => fileSelectedHandler(e)}
                  />
                  <br />
                  <br />
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Poster
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

AddAnnonce.propTypes = {
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { test, getCurrentProfile })(
  AddAnnonce
);
