import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../action/auth";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  if (isAuthenticated) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/dashboard" className="navbar-brand">
          ShareFood
        </Link>
        <SignedInLinks logout={logout} />
      </nav>
    );
  } else {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          ShareFood
        </Link>

        <SignedOutLinks />
      </nav>
    );
  }
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
