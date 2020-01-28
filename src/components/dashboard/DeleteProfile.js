import React from "react";
import PropTypes from "prop-types";
import { deleteProfile } from "../../action/profile";
import { connect } from "react-redux";

function DeleteProfile({ deleteProfile }) {
  const onSubmit = async e => {
    e.preventDefault();

    deleteProfile();
  };
  return (
    <div>
      <p>Are you sure you want to delete?</p>
      <form onSubmit={e => onSubmit(e)}>
        <button type="submit" className="btn btn-primary">
          Yes
        </button>
      </form>
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
