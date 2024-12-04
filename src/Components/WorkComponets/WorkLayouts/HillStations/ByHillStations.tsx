import React from "react";
import Footers from "../../../LandingPagesLayouts/Footers/Footers";
import Navbar from "../../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./ByHillStations.module.css";


export const WorkHeros: React.FC = () => {
    const scrollToSection = () => { };
    return (
        <>
            <Navbar scrollToSection={scrollToSection} />
            <div className={Styles.WorkHerosContainer}>
                <div className={Styles.WorkHerosContainerListOne}>
                    <h1 className={Styles.WorkHerosH1}>By Zara</h1>
                    <p className={Styles.WorkHerosParagrph}>Tagline/ description goes here</p>
                    <div className={Styles.WorkHerosNavList}>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>Brand Identity</nav>
                            <nav className={Styles.WorkHerosNav}>Strategy</nav>
                        </div>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>Packaging</nav>
                            <nav className={Styles.WorkHerosNav}>Motion Graphics</nav>
                        </div>
                        <nav className={Styles.WorkHerosNavSingle}>Photography</nav>
                    </div>
                </div>
                <div className={Styles.WorkHerosContainerListTwo}>
                    <div className={Styles.WorkHerosImageOne}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageTwo}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageThree}></div>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesOne}></div>
                        <div className={Styles.DivImagesTwo}></div>
                    </div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageFour}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageFive}></div>
                    <div className={Styles.WorkHerosImageSix}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundOne}></div>
                        <div className={Styles.DivImagesBackgroundTwo}></div>
                    </div>
                    <div className={Styles.WorkHerosImageSeven}></div>
                    <div className={Styles.WorkHerosImageEight}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundThree}></div>
                        <div className={Styles.DivImagesBackgroundFour}></div>
                    </div>
                    <div className={Styles.WorkHerosImageNine}></div>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundFive}></div>
                        <div className={Styles.DivImagesBackgroundSix}></div>
                    </div>
                    <div className={Styles.WorkHerosImageTen}></div>
                </div>
            </div>
            <Footers />
        </>
    )
}

export default WorkHeros;