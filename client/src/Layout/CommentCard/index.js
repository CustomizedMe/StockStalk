import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";

const CommentCard = ({ comment = {}, flag }) => {
  //console.log(comment);
  const month = [];
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  const light = "bg-light text-dark mt-2 text-muted";
  const dark = " text-white mt-2 ";
  comment.date = comment.date || new Date();
  const DateOn = new Date(comment.date);
  return (
    <div>
      <Card className={flag === 0 ? light : dark} style={{ width: "auto" }}>
        <CardBody>
          <CardTitle className="text-left">
            <Link to={`/profile/${comment.username}`} className="text-muted">
              <strong>@{comment.username}</strong>
            </Link>
            {" | "}
            <span>
              <Link to={`/market/${comment.symbol}`}>
                <small className="text-muted text-left">
                  {" "}
                  {comment.symbol}{" "}
                </small>
              </Link>
            </span>
            <div
              style={{
                display: "inline-block",
                float: "right",
                color: flag === 0 ? " #22262a" : "white",
              }}
            >
              <small>
                {`posted at ${DateOn.getUTCHours()}:${DateOn.getUTCMinutes()}  on ${DateOn.getDate()}-${
                  month[DateOn.getMonth()]
                }-${DateOn.getFullYear()}`}
              </small>
            </div>
          </CardTitle>
          <p
            style={{
              color: flag === 0 ? " #22262a" : "white",
              fontWeight: 500,
            }}
          >
            {comment.text}
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

CommentCard.propTypes = {};

export default CommentCard;
