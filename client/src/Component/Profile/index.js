import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import * as ProfileApi from "../../Api/ProfileApi";
import AboutCard from "./AboutCard";
import PostsCard from "./PostsCard";
import { connect } from "react-redux";

const Profile = ({ props, username, location }) => {
  const currentUsername = location.pathname.split("/")[2] || username;

  const posts = [
    // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit vel nemo deleniti magnam ut delectus nisi mollitia pariatur, odit,commodi cumque nam? Possimus vero eius, corrupti voluptates magnam totam.",
    // ,
    // "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit vel nemo deleniti magnam ut delectus nisi mollitia pariatur, odit,commodi cumque nam? Possimus vero eius, corrupti voluptates magnam totam.",
  ];
  console.log(currentUsername, username);
  const [isMyProfile, setIsMyProfile] = useState(username == currentUsername);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    ProfileApi.getProfile(currentUsername).then((data) => {
      setProfile(data);
      setIsMyProfile(username === currentUsername);
    });
  }, [currentUsername]);

  return (
    <PageLayout page="profile">
      <section className="padTop-5 dark">
        <div className="container">
          <div className="row">
            <div className="col-5 ">
              <AboutCard profile={profile} isMyProfile={isMyProfile} />
            </div>
            <div className="col-7">
              <PostsCard posts={posts} />
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

const mapDispatchToProps = {};
const mapStateToProps = (state) => ({
  username: state.loggedIn.username,
});
Profile.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
