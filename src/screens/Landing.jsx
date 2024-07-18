import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Testimonials from "../components/Sections/Testimonials";
// import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />
      <Testimonials />
      {/* <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
