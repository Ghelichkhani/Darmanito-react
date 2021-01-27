import React from "react";
import TopNav from "../../Components/TopNav";
import LandingContent from '../Landing/LandingContent'
import Support from "../../Components/support";
import Footer from "../../Components/footer";
export default function FAQ() {
  return (
    <section className="container-fluid">
      <TopNav />
    <LandingContent/>

      <Support />
      <Footer />
    </section>
  );
}