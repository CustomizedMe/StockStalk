import React, { useState, useEffect } from "react";
import PageLayout from "../../Layout/PageLayout";
import ProfileForm from "./ProfileForm";
import * as ProfileApi from "../../Api/ProfileApi";

import { connect } from "react-redux";

const EditProfile = ({ history, loggedIn }) => {
  const initial_profile = {
    // social: {},
    // user: {
    //   username: "Username here",
    //   name: "Name here",
    // },
    // about: "",
    // company: "",
    // designation: "",
    // picture: "",
  };
  console.log("Prakhar loggedIn", loggedIn);
  const [profile, setProfile] = useState(initial_profile);
  console.log("profile here");
  console.log(profile);
  const onChange = ({ target }) => {
    const { name, value } = target;
    setProfile({ ...profile, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    ProfileApi.editProfile(profile)
      .then((data) => {
        setProfile(data);
        history.push("/profile");
      })
      .catch((err) => {
        console.log(err);
        alert("Edit profile error");
      });
    history.push("/profile");
  };

  useEffect(() => {
    ProfileApi.getMyProfile().then((data) => {
      console.log("get my profile called");
      console.log(data);
      setProfile(data);
    });
  }, [loggedIn]);

  return (
    <PageLayout page="profile">
      <section className="profile-form padTop-5 dark min-vh-100 pb-5">
        <div className="container">
          <ProfileForm
            profile={profile}
            onChange={onChange}
            onSubmit={onSubmit}
          />
        </div>
      </section>
    </PageLayout>
  );
};

EditProfile.propTypes = {};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
});

export default connect(mapStateToProps)(EditProfile);
