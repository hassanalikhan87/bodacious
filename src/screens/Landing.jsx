import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Company from "../components/Sections/Company";
import Services from "../components/Sections/Services";
import Portfolio from "../components/Sections/Portfolio";
import Testimonials from "../components/Sections/Testimonials";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import { landingData } from "./landing.data";

export default function Landing() {
  return (
    <>
      <TopNavbar data={landingData.navigation} />
      <Company data={landingData.company} />
      <Services data={landingData.services} />
      <Portfolio data={landingData.portfolio} />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
