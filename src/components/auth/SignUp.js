import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { signUp } from "../../action/auth";
import PropTypes from "prop-types";

export function SignUp({ setAlert, signUp }) {
  const [formData, setFormData] = useState({
    //Check Hooks
    username: "",
    email: "",
    password: "",
    password2: ""
  });

  const { username, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      signUp({ username, email, password });
    }
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>SignUp Form</h3>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired
};

export default connect(null, { setAlert, signUp })(SignUp);
