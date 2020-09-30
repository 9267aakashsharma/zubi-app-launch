import React from "react";
import { Footer, Section } from "../../shared/components";
import Events from "./Events/Events";
import Hero from "./Hero/Hero";
import Refer from "./Refer/Refer";
import "./Home.scss";
import Industry from "./Industry/Industry";
import About from "./About/About";
import Download from "./Download/Download";

const Home = () => {
  return (
    <div className="zubi-home">
      <Hero />
      <Section child={<Refer />} />
      <Section child={<Events />} bgColor="secondary" />
      <Section child={<Industry />} />
      <Section child={<About />} bgColor="secondary" />
      <Section child={<Download />} />
      <Footer />
    </div>
  );
};

export default Home;
