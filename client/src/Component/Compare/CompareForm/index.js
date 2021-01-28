import React, { useState } from "react";
import PropTypes from "prop-types";
import { Input, Col, Row, CardBody } from "reactstrap";

const CompareForm = ({ companyForm, onChange, onSubmit }) => {
  return (
    <CardBody>
      <form onSubmit={onSubmit}>
        <Row>
          <Col md="4" className="mx-auto my-2" sm="12">
            <Input
              type="text"
              name="company1"
              placeholder="Company I "
              onChange={onChange}
              value={companyForm.company1}
            />
          </Col>
          <Col md="4" className="mx-auto my-2" sm="12">
            <Input
              type="text"
              placeholder="Company II"
              onChange={onChange}
              name="company2"
              value={companyForm.company2}
            />
          </Col>
          <Col className="mx-auto my-2" md="4" sm="12">
            <Input
              type="submit"
              color="primary"
              bsSize="md"
              className="mx-auto btn btn-dark-outline"
              value="Compare the Companies"
            />
          </Col>
        </Row>
      </form>
    </CardBody>
  );
};

CompareForm.propTypes = {
  companyForm: PropTypes.object.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func.isRequired,
};

export default CompareForm;
