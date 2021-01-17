import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";

import AboutCard from "./AboutCard";
import PostsCard from "./PostsCard";
const Profile = (props) => {
  const posts = [
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit vel nemo deleniti magnam ut delectus nisi mollitia pariatur, odit,commodi cumque nam? Possimus vero eius, corrupti voluptates magnam totam.",
    ,
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum velit vel nemo deleniti magnam ut delectus nisi mollitia pariatur, odit,commodi cumque nam? Possimus vero eius, corrupti voluptates magnam totam.",
  ];
  return (
    <PageLayout page="profile">
      <section className="padTop-5 dark">
        <div className="container">
          <div className="row">
            <div className="col-5 ">
              <AboutCard />
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

Profile.propTypes = {};

export default Profile;
