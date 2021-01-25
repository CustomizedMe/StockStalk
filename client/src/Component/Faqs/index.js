import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import { Link } from "react-router-dom";
<<<<<<< HEAD

const Faqs = (props) => {
  return (
    <PageLayout page="faqs">
      <div className="padTop-5 card ">
        <div className="accordion mt-500">
          <div className="card ">
            <div className="card-header" id="headingOne">
              <h2 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Collapsible Group Item #1
                </button>
              </h2>
            </div>

            <div
              id="collapseOne"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Collapsible Group Item #2
                </button>
              </h2>
            </div>
            <div
              id="collapseTwo"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingThree">
              <h2 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Collapsible Group Item #3
                </button>
              </h2>
            </div>
            <div
              id="collapseThree"
              className="collapse"
              aria-labelledby="headingThree"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch. Food truck quinoa
                nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua
                put a bird on it squid single-origin coffee nulla assumenda
                shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                wes anderson cred nesciunt sapiente ea proident. Ad vegan
                excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably
                haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        </div>
      </div>
=======
import { Collapse } from "reactstrap";
import FaqCard from "./FaqCard";

const Faqs = (props) => {
  const [isOpen, setIsOpen] = useState(0);
  // const toggle = () => setIsOpen(!isOpen);

  const faqs = [
    {
      question: "What is StockStalk?",
      answer:
        "Web Application that is a one point resource for investors, finance enthusiasts, information seekers for them to analyze stocks. We have features to analyze the time series data based on monthly, weekly and daily adjusted prices with a single search. Along with that, one can compare two stocks on their time series information.But that's not what makes StockStalk different, there is a functionalit to check other investor profiles, check ou thier views on different companies and your views on company pages. The market page also awaits with latest financial news.",
    },
    {
      question: "What is the data that StockStalk serves?",
      answer:
        "As for now StockStalk supports the Company Data from BSE (we will soon add Global Data functionality and support). Search can be done by both Scrip codes and Exact Names by which the companies are listed on Bombay Stock Exchange.",
    },
    {
      question: "question3",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, risus at pretium viverra, ligula lacus semper sapien, eu viverra eros augue sit amet ligula. Donec non mi a quam sodales pellentesque ullamcorper eget diam. Cras laoreet ut quam quis posuere. Praesent molestie nunc non tortor efficitur luctus. Curabitur vel efficitur lacus. Pellentesque sagittis ligula sit amet purus sollicitudin, ac varius tellus scelerisque. Phasellus ac diam tincidunt, congue enim in, scelerisque ex. Etiam rutrum sollicitudin mi, ut faucibus felis.",
    },
    {
      question: "question4",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, risus at pretium viverra, ligula lacus semper sapien, eu viverra eros augue sit amet ligula. Donec non mi a quam sodales pellentesque ullamcorper eget diam. Cras laoreet ut quam quis posuere. Praesent molestie nunc non tortor efficitur luctus. Curabitur vel efficitur lacus. Pellentesque sagittis ligula sit amet purus sollicitudin, ac varius tellus scelerisque. Phasellus ac diam tincidunt, congue enim in, scelerisque ex. Etiam rutrum sollicitudin mi, ut faucibus felis.",
    },
    {
      question: "question5",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, risus at pretium viverra, ligula lacus semper sapien, eu viverra eros augue sit amet ligula. Donec non mi a quam sodales pellentesque ullamcorper eget diam. Cras laoreet ut quam quis posuere. Praesent molestie nunc non tortor efficitur luctus. Curabitur vel efficitur lacus. Pellentesque sagittis ligula sit amet purus sollicitudin, ac varius tellus scelerisque. Phasellus ac diam tincidunt, congue enim in, scelerisque ex. Etiam rutrum sollicitudin mi, ut faucibus felis.",
    },
    {
      question: "question6",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus dictum, risus at pretium viverra, ligula lacus semper sapien, eu viverra eros augue sit amet ligula. Donec non mi a quam sodales pellentesque ullamcorper eget diam. Cras laoreet ut quam quis posuere. Praesent molestie nunc non tortor efficitur luctus. Curabitur vel efficitur lacus. Pellentesque sagittis ligula sit amet purus sollicitudin, ac varius tellus scelerisque. Phasellus ac diam tincidunt, congue enim in, scelerisque ex. Etiam rutrum sollicitudin mi, ut faucibus felis.",
    },
  ];

  return (
    <PageLayout page="faqs">
      <section className="padTop-5">
        <div className="container">
          {faqs.map((faq, ind) => (
            <FaqCard
              faq={faq}
              key={ind}
              ind={ind}
              align={ind % 2 === 0 ? "left" : "right"}
              isOpen={isOpen === ind}
              setActive={(ind) => setIsOpen(ind)}
            />
          ))}
        </div>
      </section>
>>>>>>> jan21
    </PageLayout>
  );
};

Faqs.propTypes = {};

export default Faqs;
