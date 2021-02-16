import React from "react";
// import Form1 from './Form1';
import TopNav from "./../../Components/TopNav";
import SignupForm from "./SignupForm";
import YourPharmacy from "./yourPharmacy";
export default function Register() {
  return (
    <div>
      <TopNav />
      <section className="container">
        <section className="row">
          <section className="col-12 col-md-6 ">
            <SignupForm />
          </section>
          <section className="col-12 col-md-6 ">
            <YourPharmacy />
          </section>
        </section>
      </section>
    </div>
  );
}
