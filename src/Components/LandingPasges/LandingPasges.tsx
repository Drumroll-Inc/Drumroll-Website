import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footers from "../LandingPagesLayouts/Footers/Footers";
import HeroLayouts from "../LandingPagesLayouts/HeroLayouts/HeroLayouts";
import NavbarLayout from "../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import HeaderLayouts from "../LandingPagesLayouts/HeaderLayouts/HeaderLayouts";
import SectionLayouts from "../LandingPagesLayouts/SectionLayouts/SectionLayouts";
import Styles from "./LandingPasges.module.css";


export const LandingPasges: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const scrollToSection = (section: string) => {
    const sectionRefs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      Home: homeRef,
      Service: serviceRef,
      Work: workRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const section = params.get("section");

    if (section) { scrollToSection(section); }
  }, [location]);

  return (
    <div className={Styles.LandingPasgesContainer}>
      <NavbarLayout scrollToSection={scrollToSection} />
      <div ref={homeRef}><HeaderLayouts /></div>
      <div ref={serviceRef}><HeroLayouts /></div>
      <div ref={workRef}><SectionLayouts /></div>
      <Footers />
    </div>
  );
};

export default LandingPasges;
