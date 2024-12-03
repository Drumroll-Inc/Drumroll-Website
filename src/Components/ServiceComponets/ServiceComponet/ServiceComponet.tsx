import React from "react";
import Footers from "../../LandingPagesLayouts/Footers/Footers";
import Navbar from "../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import ServiceHeros from "../ServiceLayouts/ServiceHeros/ServiceHeros";
import ServiceHeaders from "../ServiceLayouts/ServiceHeaders/ServiceHeaders";
import Styles from "./ServiceComponet.module.css";


export const ServiceComponet: React.FC = () => {
    const scrollToSection = () => { };

    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <div className={Styles.ServiceComponetContainer}>
                <ServiceHeaders />
                <ServiceHeros />
            </div>
            <Footers />
        </>
    )
}

export default ServiceComponet;