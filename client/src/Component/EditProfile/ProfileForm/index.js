import React from "react";
import PropTypes from "prop-types";

const ProfileForm = ({ profile, onChange, onSubmit }) => {
  return (
    <div className="card bg-dark text-white px-4">
      <div className="card-header py-3 text-center">
        <h2>Edit Profile</h2>
      </div>
      <div className="card-body">
        <form onSubmit={onSubmit}>
          <div className="row my-2">
            <div className="col-4 ">
              <div className="form-group">
                <label>UserName</label>
                <input
                  disabled
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="username..."
                  onChange={onChange}
                  value={profile.username}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Name</label>
                <input
                  disabled
                  type="text"
                  name="name"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Name..."
                  value={profile.name}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Gender</label>
                <select
                  disabled
                  type="text"
                  name="gender"
                  onChange={onChange}
                  className="form-control"
                  placeholder="gender..."
                  value={profile.gender}
                >
                  <option value="male" key="1">
                    Male
                  </option>
                  <option value="female" key="2">
                    Female
                  </option>
                </select>
              </div>
            </div>
          </div>
          {/* second row */}
          <div className="row my-4">
            <div className="col-6">
              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  onChange={onChange}
                  className="form-control"
                  placeholder="company..."
                  value={profile.company}
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label>Designation</label>
                <input
                  type="text"
                  name="designation"
                  onChange={onChange}
                  className="form-control"
                  placeholder="Designation..."
                  value={profile.designation}
                />
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group">
              <label>About me</label>
              <textarea
                cols="30"
                //   rows="4"
                onChange={onChange}
                className="form-control"
                placeholder="About me"
                value={profile.about}
                name="about"
              ></textarea>
            </div>
          </div>
          <div className="row my-4">
            <div className="form-group">
              <label>Profile pic url</label>
              <input
                type="text"
                name="picture"
                onChange={onChange}
                value={profile.picture}
                className="form-control"
                placeholder="profile pic..."
              />
            </div>
          </div>
          <div className="row my-4">
            <div className="col-4">
              <div className="form-group">
                <label>Facebook Url</label>
                <input
                  type="text"
                  name="facebook"
                  onChange={onChange}
                  value={profile.facebook}
                  className="form-control"
                  placeholder="Facebook Url"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Twitter Url</label>
                <input
                  type="text"
                  name="twitter"
                  onChange={onChange}
                  value={profile.twitter}
                  className="form-control"
                  placeholder="Twitter Url"
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>LinkedIn Url</label>
                <input
                  type="text"
                  name="linkedin"
                  onChange={onChange}
                  value={profile.linkedin}
                  className="form-control"
                  placeholder="LinkedIn Url"
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-outline-light w-25 my-3"
            value="Save"
          />
        </form>
      </div>
    </div>
  );
};

ProfileForm.propTypes = {};

export default ProfileForm;
