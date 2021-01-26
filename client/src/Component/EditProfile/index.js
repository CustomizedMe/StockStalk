import React, { useState, useEffect } from "react";
import PageLayout from "../../Layout/PageLayout";
import ProfileForm from "./ProfileForm";
import * as ProfileApi from "../../Api/ProfileApi";

const EditProfile = ({ history }) => {
  const initial_profile = {};
  const [profile, setProfile] = useState(initial_profile);
  console.log("profilehere");
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
      console.log(data);
      setProfile(data);
    });
  }, []);

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
