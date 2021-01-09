import React from "react";
import { Jumbotron, Button } from "reactstrap";
import bgimage from "../../assets/img/jumbotron_img.jpg";
const Landing = () => {
  const col = "#ffffff";
  return (
    <>
      <Jumbotron
        style={{
          backgroundImage: `url(${bgimage})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          className='display-3'
          style={{
            /*color: col,*/
            textTransform: "uppercase",
            letterSpacing: "1.08em",
            fontFamily: "Montserrat",
            textAlign: "center",
          }}
        >
          Stock Stalk
        </h1>
        <p style={{ /*color: col,*/ textAlign: "center", maxWidth: "80%" }}>
          StockStalk provides real-time market quotes, company ticker,
          comparison of stocks and other information., Explore other investors
          profile, their views on a company and post your views.
        </p>
        <p className='lead'>
          <Button color='primary'>Learn More</Button>
        </p>
      </Jumbotron>
    </>
  );
};

export default Landing;
