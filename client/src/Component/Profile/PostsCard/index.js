import React from "react";
import PropTypes from "prop-types";
import PostCard from "../Post";
import CommentCard from "../../../Layout/CommentCard";
import { Card, CardTitle } from "reactstrap";

const PostsCard = ({ posts = [] }) => {
  //console.log("posts sent like this");
  //console.log(posts);
  return (
    <>
      <Card className="card text-white px-4 shadow-lg">
        <CardTitle className="h3 my-3 mx-auto text-white">
          {" "}
          Posts by the user{" "}
        </CardTitle>
        <div className="scroll">
          {posts.map(function (object, i) {
            return <CommentCard comment={object} key={i} flag={i % 2} />;
          })}
        </div>
      </Card>
    </>
  );
};

PostsCard.propTypes = {};

export default PostsCard;
