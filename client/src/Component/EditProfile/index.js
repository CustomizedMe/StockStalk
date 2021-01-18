import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import ProfileForm from "./ProfileForm";
const EditProfile = ({ history }) => {
  const initial_profile = {
    name: "Prakhar",
    username: "prakhar194",
    gender: "male",
    company: "SAIC",
    designation: "Core team Member",
    about: "A simple and sweet guy",
    picture: "abc.com",
    facebook: "facebook.com",
    twitter: "twitter.com",
    linkedin: "linkedin.com",
  };
  const [profile, setProfile] = useState(initial_profile);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setProfile({ ...profile, [name]: value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(profile);
    history.push("/profile");
  };
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

export default EditProfile;
