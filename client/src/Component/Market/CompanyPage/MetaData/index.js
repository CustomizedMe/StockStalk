import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardHeader } from "reactstrap";

const MetaData = ({ data }) => {
  const transform = (text) => {
    var res = text.split(" ").slice(1);
    for (var i = 0; i < res.length; i++) {
      var cap = res[i].toUpperCase();
      res[i] = cap[0] + res[i].substr(1);
    }
    return res.join(" ");
  };

  const data1 = data["Global Quote"];
  console.log(data);
  const keys = Object.keys(data1);

  return (
    <Card className="text-white ">
      <CardHeader className="text-center h2 my-2"> Global Quote</CardHeader>
      <CardBody className="card-body">
        {keys.map((key) => (
          <div key={key} className="row my-1">
            <div className="col-6">{transform(key)}</div>
            <div className="col-6 text-light">{data1[key]}</div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

MetaData.propTypes = {};

export default MetaData;
