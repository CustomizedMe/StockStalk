import React from "react";
import PropTypes from "prop-types";
import { Card, CardBody, CardHeader, Collapse } from "reactstrap";

const FaqCard = ({ faq, isOpen, align, setActive, ind }) => {
  return (
    <Card
      className={"w-75 " + (align === "left" ? "ml-0 mr-auto" : "ml-auto mr-0")}
      onClick={() => setActive(ind)}
    >
      <CardHeader className="mb-3" color="primary">
        <span>
          <strong className="h3 text-white">{faq.question}</strong>
          <div className="float-right">
            <i
              className={`fas fa-arrow-${isOpen ? "up" : "down"} fa-1.2x `}
              align="center"
            ></i>
          </div>
        </span>
      </CardHeader>
      <Collapse isOpen={isOpen}>
        <CardBody>
          <p className="">{faq.answer}</p>
        </CardBody>
      </Collapse>
    </Card>
  );
};

FaqCard.propTypes = {};

export default FaqCard;
