import React from "react";
import PropTypes from "prop-types";

const PostCard = ({ post }) => {
  return <p className="m-5 text-white">{post}</p>;
};

PostCard.propTypes = {};

export default PostCard;
