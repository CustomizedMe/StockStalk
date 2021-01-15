import React from "react";
import PageLayout from "../../Layout/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <section className="jumbotron">
        <div className="container pt-5 text-center text-light">
          <h3>Having trouble finding the right stocks?</h3>
          <p className="fs-2">
            Try <span className="fs-1 "> Stock Stalk </span>
          </p>
        </div>
      </section>
      <section className="stats">
        <div className="row">
          <div className="col-4"></div>
        </div>
      </section>
    </PageLayout>
  );
}
