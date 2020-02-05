import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { editProfile } from "../../action/profile";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import axios from "axios";
import { getCurrentProfile } from "../../action/profile";

export function EditProfile({
  setAlert,
  editProfile,
  getCurrentProfile,
  auth,
  profile
}) {
  let picture = "";
  const [formData, setFormData] = useState({
    //Check Hooks
    username: profile.profile.username,
    email: profile.profile.email,
    picture: profile.profile.picture
  });
  const { username, email } = formData;

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

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();

    editProfile({ email, username, picture });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Editer Votre Profil</h5>
                <form onSubmit={e => onSubmit(e)}>
                  <div className="form-group">
                    <label>Nom </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      value={username}
                      placeholder={profile.profile.username}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder={profile.profile.email}
                      name="email"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                  </div>

                  <input
                    type="file"
                    name="picture"
                    onChange={e => fileSelectedHandler(e)}
                  />
                  <button type="submit" className="btn btn-primary">
                    Enregistrer
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

EditProfile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  email: state.profile.email,
  profile: state.profile
});

export default connect(mapStateToProps, {
  setAlert,
  editProfile,
  getCurrentProfile
})(EditProfile);
