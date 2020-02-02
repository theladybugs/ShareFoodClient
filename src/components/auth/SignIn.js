import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../action/alert";
import { signIn } from "../../action/auth";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

export function SignIn({ setAlert, signIn, isAuthenticated, user }) {
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

    signIn({ email, password });
  };
  // Redirect if SignedIn
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card card-signin flex-row my-5">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body">
                <h5 className="card-title text-center">Connexion</h5>
                <form className="form-signin" onSubmit={e => onSubmit(e)}>
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
                    <label htmlFor="inputEmail">Email</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter your password"
                      name="password"
                      value={password}
                      onChange={e => onChange(e)}
                      required
                      id="inputPassword"
                    />
                    <label htmlFor="inputPassword">Mot de Passe</label>
                  </div>
                  <hr />
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Se Connecter
                  </button>
                  <a className="d-block text-center mt-2 small" href="/signup">
                    S'inscrire
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
SignIn.propTypes = {
  setAlert: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { setAlert, signIn })(SignIn);
