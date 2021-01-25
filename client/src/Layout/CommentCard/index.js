import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { Card, CardBody, CardTitle } from "reactstrap";
>>>>>>> jan21

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
<<<<<<< HEAD
  const light = " card bg-light text-dark mt-2";
=======
  const light = "card bg-light text-dark mt-2";
>>>>>>> jan21
  const dark = " card bg-dark text-white mt-2";
  comment.date = comment.date || new Date();
  const DateOn = new Date(comment.date);
  return (
    <div>
<<<<<<< HEAD
      <div className={flag === 0 ? light : dark} style={{ width: "auto" }}>
        <div className="card-body mt-1 mb-1">
          <div className="card-title text-left ">
=======
      <Card className={flag === 0 ? light : dark} style={{ width: "auto" }}>
        <CardBody
        // className="card-body mt-1 mb-1"
        >
          <CardTitle className="card-title text-left ">
>>>>>>> jan21
            <Link to={`/profile/${comment.username}`} className="text-muted">
              <strong>@{comment.username}</strong>
            </Link>
            {" | "}
            <span>
              <Link to={`/market/${comment.symbol}`}>
                <small class="text-muted text-left"> {comment.symbol} </small>
              </Link>
            </span>
            <div style={{ display: "inline-block", float: "right" }}>
              <small>
                {`posted at ${DateOn.getUTCHours()}:${DateOn.getUTCMinutes()}  on ${DateOn.getDate()}-${
                  month[DateOn.getMonth()]
                }-${DateOn.getFullYear()}`}
              </small>
            </div>
<<<<<<< HEAD
          </div>
          <p>{comment.text}</p>
        </div>
      </div>
=======
          </CardTitle>
          <p>{comment.text}</p>
        </CardBody>
      </Card>
>>>>>>> jan21
    </div>
  );
};

CommentCard.propTypes = {};

export default CommentCard;
