import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { signIn } from "../../action/auth";
import PropTypes from "prop-types";

export function SignIn({ setAlert, signIn }) {
  const [formData, setFormData] = useState({
    //Check Hooks
    email: "",
    password: ""
  });
  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    //setAlert("Success", "danger");
    signIn({ email, password });
  };
  return (
    <Fragment>
      <form onSubmit={e => onSubmit(e)}>
        <h3>SignIn Form</h3>
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

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Fragment>
  );
}
SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired
};

export default connect(null, { setAlert, signIn })(SignIn);
