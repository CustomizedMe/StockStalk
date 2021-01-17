import React from "react";
import PropTypes from "prop-types";

const Comments = (props) => {
  return (
    <div>
      <div className="card  bg-dark text-white mt-5" style={{ width: "auto" }}>
        <div className="card-body">
          <div className="card-title">
            <strong>@username</strong>
            <div style={{ display: "inline-block", float: "right" }}>
              HH : MM on DD_MM_YY
            </div>
          </div>

          {/* <CardSubtitle className='mb-2 text-muted'>SYMBOL</CardSubtitle> */}
          <p>
            card text - Some quick example text to build on the card title and
            make up the bulk of the card's content.
          </p>
          <small>
            <div href="/#/">Show Comments</div>
          </small>
          <div style={{ marginLeft: "10px" }}>
            <small>comment on comment</small>
          </div>
        </div>
      </div>
    </div>
  );
};

Comments.propTypes = {};

export default Comments;
