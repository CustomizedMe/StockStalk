import React from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import CommentCard from "../../../../Layout/CommentCard";

const Comments = ({ comments }) => {
  //console.log(comments, "Prakhar coming here");
  return (
    <Card className="my-5">
      <CardHeader className="text-center h2 mt-2">Comments</CardHeader>
      <CardBody>
        {comments.length > 0 ? (
          comments.map((comment, ind) => (
            <CommentCard comment={comment} key={ind} flag={ind % 2} />
          ))
        ) : (
          <h2 className="text-danger text-center font-weight-bold">
            No Comments here
          </h2>
        )}
      </CardBody>
    </Card>
  );
};

Comments.propTypes = {};

export default Comments;
