import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import * as ProfileApi from "../../Api/ProfileApi";
import * as CommentApi from "../../Api/CommentApi";

import AboutCard from "./AboutCard";
import PostsCard from "./PostsCard";
import { connect } from "react-redux";

const Profile = ({ props, username, location }) => {
  const currentUsername = location.pathname.split("/")[2] || username;
  //console.log(currentUsername, username);
  const initial_post = [];
  const [isMyProfile, setIsMyProfile] = useState(username === currentUsername);

  const [profile, setProfile] = useState({});

  const [posts, setPost] = useState(initial_post);

  useEffect(() => {
    ProfileApi.getProfile(currentUsername).then((data) => {
      setProfile(data);
      console.log("profile here");
      setIsMyProfile(username === currentUsername);
    });
  }, [currentUsername, username]);

  useEffect(() => {
    CommentApi.userComments(currentUsername).then((data) => {
      setPost(data);
      // console.log("comments here");
      console.log(data);
      // console.log(posts);
    });
  }, [currentUsername]);

  console.log("posts here");
  console.log(posts);

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