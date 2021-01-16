import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const [register, setRegister] = useState(true);

  return (
    <PageLayout page={"enter"}>
      <section className="bg-light min-vh-100 pb-5 padTop-5">
        <div className="container pt-5 ">
          <div className="card bg-dark text-center p-4 shadow-lg w-50 m-auto">
            {/*<ul class="nav nav-pills mx-auto text-center my-3">
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
            </ul> */}
            <div>
              {register ? (
                <RegisterForm toggleRegister={() => setRegister(false)} />
              ) : (
                <LoginForm toggleRegister={() => setRegister(true)} />
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
