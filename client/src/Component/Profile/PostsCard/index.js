import React from "react";
import PropTypes from "prop-types";
import PostCard from "../Post";
import CommentCard from "../../../Layout/CommentCard";

const PostsCard = ({ posts = [] }) => {
  console.log("posts sent like this");
  console.log(posts);
  return (
    <>
      <div className="card bg-dark text-white px-4 shadow-lg">
        <div className="card-header h3 my-2"> Posts by the user </div>
        <div className="scroll">
          {posts.map(function (object, i) {
            return <CommentCard comment={object} key={i} flag={i % 2} />;
          })}
        </div>
      </div>
    </>
  );
};

PostsCard.propTypes = {};

export default PostsCard;
