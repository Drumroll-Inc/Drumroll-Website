import React from "react";
import NavbarLayout from "../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./LandingPasges.module.css";


export const LandingPasges: React.FC = () => {
  return (
    <div className={Styles.LandingPasgesContainer}>
      <NavbarLayout />
    </div>
  )
}

export default LandingPasges;