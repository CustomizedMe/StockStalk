import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  CardText,
  Card,
  Input,
  Col,
  Row,
  CardBody,
  Form,
  Button,
} from "reactstrap";

const CompareForm = ({ location, history }) => {
  const [companyName1, setcompanyName1] = useState("");
  const [companyName2, setcompanyName2] = useState("");

  const onChange1 = ({ target }) => {
    setcompanyName1(target.value.toUpperCase());
  };
  const onChange2 = ({ target }) => {
    setcompanyName2(target.value.toUpperCase());
  };
  const onSubmit = (e) => {
    e.preventDefault();
    history.push(`/compare/${companyName1}/${companyName2}`);
  };
  return (
    <>
      <CardBody>
        <form onSubmit={onSubmit}>
          <Row>
            <Col md="5">
              <Input
                type="text"
                placeholder="Company I "
                onChange={onChange1}
                value={companyName1}
              />
            </Col>
            <Col md="5">
              <Input
                type="text"
                placeholder="Company II"
                onChange={onChange2}
                value={companyName2}
              />
            </Col>
            <Col md="2">
              <Button color="primary" size="sm">
                Compare the Companies
              </Button>
            </Col>
          </Row>
        </form>
      </CardBody>
    </>
  );
};

CompareForm.propTypes = {};

export default CompareForm;
