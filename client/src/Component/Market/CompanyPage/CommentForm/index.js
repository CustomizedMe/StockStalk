import React from "react";
import { Button, Card, CardHeader, Input } from "reactstrap";

const CommentForm = ({ onSubmit, CommentData, onChange }) => {
  return (
    <Card className="my-5 px-5 pb-4">
      <CardHeader className="h2 text-center my-2">Post Comment</CardHeader>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <div className="my-2 mb-4">
            <textarea
              cols="120"
              rows="4"
              onChange={onChange}
              className="form-control"
              placeholder="Post your comment for this Company"
              name="text"
              value={CommentData.text}
            ></textarea>
          </div>
          <div className="my-1 float-right">
            <Button type="submit" color="primary">
              Post
            </Button>
          </div>
        </div>
      </form>
    </Card>
  );
};

CommentForm.propTypes = {};

export default CommentForm;
