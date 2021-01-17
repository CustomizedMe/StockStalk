import React from "react";
import PropTypes from "prop-types";
import PostCard from "../Post";

const PostsCard = ({ posts = [] }) => {
  return (
    <div className="card bg-dark text-center text-white px-4 shadow-lg">
      <div className="card-header h2 my-2"> Posts</div>
      <ul className="list-group">
        {posts.map((post, ind) => (
          <li
            className="list-group-item  border-top-0 border-start-0 border-end-0 border-primary bg-transparent list-group-item-dark"
            key={ind}
          >
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

PostsCard.propTypes = {};

export default PostsCard;
