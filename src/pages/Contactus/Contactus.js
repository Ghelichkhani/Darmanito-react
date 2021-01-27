import React from "react";
import ContactusHeading from "../../pages/Contactus/ContactusHeading";
import TopNav from "../../Components/TopNav";
import Support from "../../Components/support";
import Footer from "../../Components/footer";
import ContactusContent from "../Contactus/ContactusContent";
export default function Contactus() {
  return (
    <div>
      <TopNav />
      <ContactusHeading />
      <ContactusContent />
      <Support />
      <Footer />
    </div>
  );
}
