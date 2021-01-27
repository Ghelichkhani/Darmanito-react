import React from "react";
import Heading from "../../pages/Faq/FaqHeading";
import TopNav from "../../Components/TopNav";
import FAQcontent from "../Faq/FAQcontent";
import Support from "../../Components/support";
import Footer from "../../Components/footer";
export default function FAQ() {
  return (
    <section className="container-fluid">
      <TopNav />
      <Heading />
      <FAQcontent />
      <Support />
      <Footer />
    </section>
  );
}
