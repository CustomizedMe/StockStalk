import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  CardSubtitle,
} from "reactstrap";

const CommentCard = (props) => {
  return (
    <div>
      <Card style={{ width: "auto" }}>
        <CardBody>
          <CardTitle style={{ display: "inline-block", float: "inline-start" }}>
            <strong>@username</strong>
          </CardTitle>
          <CardTitle style={{ display: "inline-block", float: "right" }}>
            HH : MM on DD_MM_YY
          </CardTitle>
          <CardSubtitle className='mb-2 text-muted'>SYMBOL</CardSubtitle>
          <CardText>
            card text - Some quick example text to build on the card title and
            make up the bulk of the card's content.
          </CardText>
          <small>
            <CardLink href='/#/'>Show Comments</CardLink>
          </small>
          <div style={{ marginLeft: "10px" }}>
            <small>comment on comment</small>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

CommentCard.propTypes = {};

export default CommentCard;
