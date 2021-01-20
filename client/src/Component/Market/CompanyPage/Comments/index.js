import React from "react";
import CommentCard from "../../../../Layout/CommentCard";

const Comments = ({ comments }) => {
  console.log(comments, "Prakhar coming here");
  return (
    <div className="card text-dark my-5">
      <div className="card-header">
        <h2>Comments</h2>
      </div>
      <div className="card-body">
        {comments.length > 0 ? (
          comments.map((comment, ind) => (
            <CommentCard comment={comment} key={ind} />
          ))
        ) : (
          <h2 className="text-danger text-center font-weight-bold">
            No Comments here
          </h2>
        )}
      </div>
    </div>
  );
};

Comments.propTypes = {};

export default Comments;
