import React from "react";
import PropTypes from "prop-types";
import { deleteProfile } from "../../action/profile";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

function DeleteProfile({ deleteProfile }) {
  const onSubmit = async e => {
    e.preventDefault();

    deleteProfile();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-10 col-xl-9 mx-auto">
          <div className="card card-signin flex-row my-5">
            <div className="card-img-left d-none d-md-flex"></div>
            <div className="card-body">
              <h5 className="card-title text-center">
                Are you sure you want to delete?
              </h5>
              <form onSubmit={e => onSubmit(e)}>
                <button type="submit" className="btn btn-danger">
                  Yes
                </button>
                <NavLink className=" btn btn-info " to="/profile">
                  No
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

DeleteProfile.propTypes = {
  deleteProfile: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  email: state.profile.email,
  profile: state.profile
});
export default connect(mapStateToProps, {
  deleteProfile
})(DeleteProfile);
