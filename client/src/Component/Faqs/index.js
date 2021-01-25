import React, { useState } from "react";
import PropTypes from "prop-types";
import PageLayout from "../../Layout/PageLayout";
import { Link } from "react-router-dom";
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
    </PageLayout>
  );
};

Faqs.propTypes = {};

export default Faqs;
