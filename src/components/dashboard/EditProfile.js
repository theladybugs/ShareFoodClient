import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { editProfile } from "../../action/profile";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import axios from "axios";

export function EditProfile({ setAlert, editProfile }) {
  let pic = "";
  const [formData, setFormData] = useState({
    //Check Hooks
    username: "",
    email: "",
    password: "",
    password2: "",
    picture: ""
  });
  const { username, email, password, password2, picture } = formData;

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
        pic += res.data[0].url;
      })
      .catch(err => console.log("err response", err));
  };

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();

    editProfile({ email, password, username, pic });
  };

  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h1>Edit Profile {localStorage.user}</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            name="username"
            value={username}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Confirm your password"
            name="password2"
            value={password2}
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
          Submit
        </button>
      </form>
    </Fragment>
  );
}

EditProfile.propTypes = {
  setAlert: PropTypes.func.isRequired,
  editProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  email: state.profile.email
});

export default connect(mapStateToProps, { setAlert, editProfile })(EditProfile);
