import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import ProfileForm from "./ProfileForm";
import * as ProfileApi from "../../Api/ProfileApi";

const EditProfile = ({ history }) => {
<<<<<<< HEAD
  const initial_profile = {
    social: {
      twitter: "twitter.com",
      facebook: "fb.com",
      linkedin: "youtube.com",
    },
    _id: "5ffae3ae0907310df870fb6f",
    user: {
      _id: "5ff962a530f44c36c88cc4e0",
      username: "abc",
      name: "abc",
    },
    company: "My company",
    designation: "Developer",
    gender: "Male",
    about: "Developer Pro Max 2 ",
    picture:
      "https://robohash.org/commodiofficiisducimus.bmp?size=50x50&set=set1",
    regdate: "2021-01-10T11:23:26.027Z",
    __v: 0,
  };
=======
  const initial_profile = {};
>>>>>>> jan21
  const [profile, setProfile] = useState(initial_profile);

  const onChange = ({ target }) => {
    const { name, value } = target;
    setProfile({ ...profile, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
<<<<<<< HEAD
    //console.log(profile);
=======
    console.log(profile);
>>>>>>> jan21
    ProfileApi.editProfile(profile)
      .then((data) => {
        //console.log(data);
        setProfile(data);
<<<<<<< HEAD
        history.push("/market");
=======
        history.push("/profile");
>>>>>>> jan21
      })
      .catch((err) => {
        console.log(err);
        alert("ProfileEdit error");
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
