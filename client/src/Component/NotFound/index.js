import React from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import { Button, Container } from "reactstrap";
import { Link } from "react-router-dom";

const NotFound = (props) => {
  return (
    <div>
      <PageLayout>
        <div className="notfound_bg min-vh-100">
          <Container className="padTop-1">
            <div className="container" align="right">
              <div
                style={{ fontSize: "300px", color: "dark" }}
                color="success"
                className="mt-0"
              >
                404
              </div>
              <h3 className="my-0 h3=">
                Sorry, the page you were looking for doesn't exist
              </h3>
              <br></br>
              <Link to="/faqs">
                <Button className="simple">Go to home</Button>
              </Link>
            </div>
          </Container>
        </div>
      </PageLayout>
    </div>
  );
};

NotFound.propTypes = {};

export default NotFound;
