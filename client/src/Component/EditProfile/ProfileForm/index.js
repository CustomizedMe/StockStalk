import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, Form } from "reactstrap";

const ProfileForm = ({ profile, onChange, onSubmit }) => {
  console.log("object");
  console.log(profile);
  return (
    <Card className="cardtext-white px-4">
      <CardTitle className="card-header py-3 mt-4 text-center">
        <h2>Edit Profile</h2>
      </CardTitle>
      <div className="card-body">
        <Form onSubmit={onSubmit}>
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
<<<<<<< HEAD
                  value={profile.user.username}
=======
                  // onChange={({ target }) =>
                  //   onChange({
                  //     target: {
                  //       name: "user",
                  //       value: {
                  //         ...profile.user,
                  //         [target.name]: target.value,
                  //       },
                  //     },
                  //   })
                  // }
                  value={(profile.user || { username: "" }).username}
>>>>>>> jan21
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
<<<<<<< HEAD
                  value={profile.user.name}
=======
                  value={(profile.user || { name: "" }).name}
>>>>>>> jan21
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Gender</label>
                <select
                  //disabled
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
<<<<<<< HEAD
                  //value={profile.social.facebook || ""}
=======
                  value={(profile.social || { facebook: "" }).facebook}
>>>>>>> jan21
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="Facebook Url"
                  //value={profile.social.facebook}
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>Twitter Url</label>
                <input
                  type="text"
                  name="twitter"
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="Twitter Url"
<<<<<<< HEAD
                  //value={profile.social.twitter || " "}
=======
                  value={(profile.social || { twitter: "" }).twitter}
>>>>>>> jan21
                />
              </div>
            </div>
            <div className="col-4">
              <div className="form-group">
                <label>LinkedIn Url</label>
                <input
                  type="text"
                  name="linkedin"
                  onChange={({ target }) =>
                    onChange({
                      target: {
                        name: "social",
                        value: {
                          ...profile.social,
                          [target.name]: target.value,
                        },
                      },
                    })
                  }
                  className="form-control"
                  placeholder="LinkedIn Url"
<<<<<<< HEAD
                  //value={profile.social.linkedin || ""}
=======
                  value={(profile.social || { linkedin: "" }).linkedin}
>>>>>>> jan21
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-outline-light w-25 my-3"
            value="Save"
          />
        </Form>
      </div>
    </Card>
  );
};

ProfileForm.propTypes = {};

export default ProfileForm;
