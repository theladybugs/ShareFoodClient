import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { setAlert } from "../../action/alert";
import { signUp } from "../../action/auth";
import PropTypes from "prop-types";

export function SignUp({ setAlert, signUp, isAuthenticated }) {
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
  //If isAuthenticated

  if (isAuthenticated) {
    return <Redirect to="dashboard" />;
  }

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Register</h5>
                <form onSubmit={e => onSubmit(e)} className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      name="username"
                      value={username}
                      id="inputUserame"
                      onChange={e => onChange(e)}
                      required
                    />
                    <label htmlFor="inputUserame">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      name="email"
                      id="inputEmail"
                      value={email}
                      onChange={e => onChange(e)}
                      required
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <hr />

                  <div className="form-label-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      id="inputPassword"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm your password"
                      name="password2"
                      value={password2}
                      onChange={e => onChange(e)}
                      required
                      id="inputConfirmPassword"
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Register
                  </button>
                  <a className="d-block text-center mt-2 small" href="/signin">
                    Sign In
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

SignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signUp })(SignUp);
