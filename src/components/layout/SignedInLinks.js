import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../action/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const SignedInLinks = props => {
  return (
    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/ajouter_annonce">
            Ajouter une annonce <span className="sr-only">(current)</span>
          </NavLink>
        </li>

        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Mon Compte
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <NavLink className="dropdown-item" to="/profile">
              Profil
            </NavLink>
            <NavLink className="dropdown-item" to="/statistiques">
              Statistiques
            </NavLink>

            <NavLink className="dropdown-item" to="/FAQ">
              FAQ
            </NavLink>
            <div className="dropdown-divider"></div>

            <a
              className="dropdown-item"
              onClick={() => props.logout()}
              href="/"
            >
              Logout <i className="fa fa-sign-out"></i>
            </a>
          </div>
        </li>
      </ul>
    </div>
  );
};

SignedInLinks.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(SignedInLinks);
