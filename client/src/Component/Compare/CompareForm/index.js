import React from "react";
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

const CompareForm = (props) => {
  return (
    <>
      <CardBody>
        <form>
          <Row>
            <Col md="5">
              <Input type="text" placeholder="Company I " />
            </Col>
            <Col md="5">
              <Input type="text" placeholder="Company II" />
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
