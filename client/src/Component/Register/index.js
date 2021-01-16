import React, { useState } from "react";
import PageLayout from "../../Layout/PageLayout";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const [register, setRegister] = useState(true);

  return (
    <PageLayout page="enter">
      <section className="dark min-vh-100 pb-5 padTop-5">
        <div className="container pt-5 ">
          <div className="card bg-dark text-center p-4 shadow-lg w-50 m-auto">
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
