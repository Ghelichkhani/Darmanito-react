import React, { useState } from "react";
import logo1 from "../assets/img/logo1.svg";
import Toggle from "./Toggle";
export default function TopNav() {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="container" id="top-nav">
      <section className="row">
        <section className="col-12 col-md-12 col-lg-3">
          <section className="nav-brand">
            <img src={logo1} alt="" />
            <section className="text-md-right">
              <h3>درمانیتو</h3>
              <p className="text-gray">همراه شما در درمان</p>
            </section>
          </section>
          <section className="custom-nav-toggler d-lg-none">
            <i className="fas fa-bars" onClick={() => setToggle(!toggle)}></i>
          </section>
        </section>
        <section className="col-12 col-md-12 col-lg-7">
          {toggle ? <Toggle /> : <Toggle classes="d-none d-md-block" /> }
        </section>
        <section className="col-lg-2">
          <button className="btn btn-blue mt-2 d-none d-lg-block">
            دانلود درمانیتو
          </button>
        </section>
      </section>
    </section>
  );
}
