import React from "react";
import { Footer, Section } from "../../shared/components";
import Events from "./Events/Events";
import Hero from "./Hero/Hero";
import Refer from "./Refer/Refer";
import "./Home.scss";
import Industry from "./Industry/Industry";
import About from "./About/About";
import Download from "./Download/Download";
import Screens from "./Screens/Screens";

interface Props {
  theme?: string;
  toggleTheme: () => void;
}

const Home = (props: Props) => {
  return (
    <div className="zubi-home">
      <Hero theme={props.theme} toggleTheme={props.toggleTheme} />
      <Section child={<Screens />} />
      <Section child={<Refer />} />
      <Section child={<Events />} bgColor="secondary" />
      <Section child={<Industry />} />
      <Section child={<About />} bgColor="secondary" />
      <Section child={<Download />} />
      <Footer theme={props.theme} />
    </div>
  );
};

export default Home;
