import React from "react";

import TopNav from '../TopNav'
import Slider from './slider'
import AboutUs from './aboutus'
import DownloadApp from './downloadapp'
import Services from './services'
import Pharmacy from './pharmacy'
import Support from '../../Components/support'
import Footer from '../../Components/footer'
export default function index() {
  return (
    <section className="container-fluid">
      <TopNav />
      <Slider />
      <AboutUs />
      <DownloadApp />
      <Services />
      <Pharmacy />
      <Support />
      <Footer />
    </section>
);
}
