import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import { Link } from "react-router-dom";
import { Collapse, Button, CardBody, Card, CardTitle, Col } from "reactstrap";

const Faqs = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <PageLayout page="faqs">
      <section className="dark min-vh-100 padTop-5 w-100 flex-align-auto">
        <Col md={10} align="right">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is StockStalk?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card style={{ marginBottom: "2rem" }}>
                <CardBody>
                  Web Application that is a one resource for investors, finance
                  enthusiasts, information seekers for them to analyze stocks.
                  We have features to analyze the time series data based on
                  monthly, weekly and daily adjusted prices with a single
                  search. Along with that, one can compare two stocks on their
                  time series information.
                  <p>
                    But that's not what makes StockStalk different, there is a
                    functionality to check other investor profiles, check ou
                    thier views on different companies and your views on company
                    pages. The market page also awaits with latest financial
                    news.
                  </p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col md={10} align="left">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is the data that StockStalk serves?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  As for now StockStalk supports the Company Data from BSE (we
                  will soon add Global Data functionality and support). Search
                  can be done by both Scrip codes and Exact Names by which the
                  companies are listed on Bombay Stock Exchange.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col md={10} align="right">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is StockStalk?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card style={{ marginBottom: "2rem" }}>
                <CardBody>
                  Web Application that is a one resource for investors, finance
                  enthusiasts, information seekers for them to analyze stocks.
                  We have features to analyze the time series data based on
                  monthly, weekly and daily adjusted prices with a single
                  search. Along with that, one can compare two stocks on their
                  time series information.
                  <p>
                    But that's not what makes StockStalk different, there is a
                    functionality to check other investor profiles, check ou
                    thier views on different companies and your views on company
                    pages. The market page also awaits with latest financial
                    news.
                  </p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col md={10} align="left">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is the data that StockStalk serves?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  As for now StockStalk supports the Company Data from BSE (we
                  will soon add Global Data functionality and support). Search
                  can be done by both Scrip codes and Exact Names by which the
                  companies are listed on Bombay Stock Exchange.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col md={10} align="right">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is StockStalk?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card style={{ marginBottom: "2rem" }}>
                <CardBody>
                  Web Application that is a one resource for investors, finance
                  enthusiasts, information seekers for them to analyze stocks.
                  We have features to analyze the time series data based on
                  monthly, weekly and daily adjusted prices with a single
                  search. Along with that, one can compare two stocks on their
                  time series information.
                  <p>
                    But that's not what makes StockStalk different, there is a
                    functionality to check other investor profiles, check ou
                    thier views on different companies and your views on company
                    pages. The market page also awaits with latest financial
                    news.
                  </p>
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
        <Col md={10} align="left">
          <div>
            <CardTitle
              className="text-white h3"
              color="white"
              onClick={toggle}
              style={{ marginBottom: "2rem" }}
            >
              What is the data that StockStalk serves?
            </CardTitle>
            <Collapse isOpen={isOpen}>
              <Card>
                <CardBody>
                  As for now StockStalk supports the Company Data from BSE (we
                  will soon add Global Data functionality and support). Search
                  can be done by both Scrip codes and Exact Names by which the
                  companies are listed on Bombay Stock Exchange.
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </Col>
      </section>
    </PageLayout>
  );
};

Faqs.propTypes = {};

export default Faqs;
