import React from "react";
import PageLayout from "../../Layout/PageLayout";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <PageLayout page="home">
      <section className="jumbotron min-vh-100">
        <div className="container pt-5 text-center text-white fw-bold ">
          <h3 className="font-monospace showcase-text ">
            Having trouble finding the right stocks?
          </h3>
          <p className="fs-2">
            Try <span className="fs-1 text-success "> Stock Stalk </span>
          </p>
        </div>
      </section>
      <section className="about my-5 pt-5">
        <div className="container text-center">
          <h1 className="mb-3">Realtime Analysis</h1>
          <p className="w-50 m-auto">
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he
            wouldn't scroll to get here. Add a button if you want the user to
            see more.
          </p>
          <Link to="/faqs" className="btn btn-info rounded mt-3">
            See More
          </Link>
        </div>
      </section>

      <section className="stats my-5 py-5">
        <div className="container d-flex justify-content-around align-items-center flex-wrap">
          <div className="box">
            <i className="fas fa-building fa-3x my-2"></i>
            <h2 className="fw-bold">300+</h2>
            <p className="text-primary fs-4">Company Stocks</p>
          </div>
          <div className="box">
            <i className="fas fa-users fa-3x my-2"></i>
            <h2 className="fw-bold">10,000+</h2>
            <p className="text-primary fs-4">Users</p>
          </div>
          <div className="box">
            <i className="fas fa-chart-line fa-3x my-2"></i>
            <h2 className="fw-bold">10+</h2>
            <p className="text-primary fs-4">Visual Analysis</p>
          </div>
          <div className="box">
            <i className="fas fa-piggy-bank fa-3x my-2"></i>
            <h2 className="fw-bold">10,000+</h2>
            <p className="text-primary fs-4">Money Saved</p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
