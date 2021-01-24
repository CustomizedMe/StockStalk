import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CardBody, CardFooter, CardImg, CardText, CardTitle } from "reactstrap";

const NewscardLayout = ({ news }) => {
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
  news.date = news.date || new Date();
  const PublishOn = new Date(news.date);
  //console.log("on card news");
  //console.log(news);
  return (
    <div
      className="card dark mt-0 ml-1 mb-5 mr-1 pr-2 pl-2 pb-2 pt-2"
      style={{
        width: "22rem",
        height: "450",
        verticalAlign: "top",
        //alignContent: "first-baseline",
        //minHeight: "450",
        display: "inline-block",
      }}
    >
      <Link to={news.url}>
        <CardImg
          src={news.urlToImage}
          className="card-img-top"
          alt="..."
        ></CardImg>
      </Link>
      <CardBody className="light">
        <CardTitle className="h4 bold">
          <strong>{news.title}</strong>
        </CardTitle>
        <hr className="dark"></hr>
        {/* <div className="text-dark">{news.content}</div> */}
        <CardText className="text-light">{news.description}</CardText>
      </CardBody>

      <CardFooter>
        <CardText className="text-muted">
          {" "}
          <small>
            {`Published at ${PublishOn.getUTCHours()}:${PublishOn.getUTCMinutes()}  on ${PublishOn.getDate()}-${
              month[PublishOn.getMonth()]
            }-${PublishOn.getFullYear()}`}
          </small>
        </CardText>
        <CardText style={{ display: "inline-block", float: "right" }}>
          {" "}
          Source : {news.source.name}
        </CardText>
      </CardFooter>
    </div>
  );
};

NewscardLayout.propTypes = {};

export default NewscardLayout;
