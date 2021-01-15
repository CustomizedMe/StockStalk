import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const [register, setRegister] = useState(true);

  return (
    <PageLayout page={"enter"}>
      <section>
        <div className="container">
          <ul class="nav nav-pills mx-auto text-center w-50 my-3">
            <li class="nav-item">
              <button
                class={"nav-link " + (register ? "" : "active")}
                onClick={() => {
                  setRegister(false);
                }}
              >
                Login
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class={"nav-link " + (register ? "active" : "")}
                onClick={() => {
                  setRegister(true);
                }}
              >
                Register
              </button>
            </li>
          </ul>
          <div>{register ? <RegisterForm /> : <LoginForm />}</div>
        </div>
      </section>
    </PageLayout>
  );
}
