import React from "react";
import Footers from "../LandingPagesLayouts/Footers/Footers";
import HeroLayouts from "../LandingPagesLayouts/HeroLayouts/HeroLayouts";
import NavbarLayout from "../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import HeaderLayouts from "../LandingPagesLayouts/HeaderLayouts/HeaderLayouts";
import SectionLayouts from "../LandingPagesLayouts/SectionLayouts/SectionLayouts";
import Styles from "./LandingPasges.module.css";


export const LandingPasges: React.FC = () => {
  return (
    <div className={Styles.LandingPasgesContainer}>
      <NavbarLayout />
      <HeaderLayouts />
      <HeroLayouts />
      <SectionLayouts />
      <Footers />
    </div>
  )
}

export default LandingPasges;