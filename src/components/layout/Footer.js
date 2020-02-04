import React from "react";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="container py-5">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">
            ShareFood © 2019-2020
          </small>
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

export default Footer;
