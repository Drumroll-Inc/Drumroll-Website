import React from "react";
import { useNavigate } from "react-router-dom";
import Footers from "../../LandingPagesLayouts/Footers/Footers";
import NavbarLayouts from "../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./WorkComponet.module.css";


export const WorkComponet: React.FC = () => {
    const navigate = useNavigate();

    const handleImageClick = (path: string) => {
        navigate(path);
    };

    return (
        <>
            <NavbarLayouts />
            <div className={Styles.WorkComponetContainer}>
                <div className={Styles.WorkHerosContainerListOne}>
                    <h1 className={Styles.WorkHerosH1}>Our Works</h1>
                    <p className={Styles.WorkHerosParagrph}>Tagline/ description goes here</p>
                    <div className={Styles.WorkHerosNavList}>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>All Projects</nav>
                            <nav className={Styles.WorkHerosNav}>Brand Identity</nav>
                        </div>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>Content Strategy</nav>
                            <nav className={Styles.WorkHerosNav}>Packaging</nav>
                        </div>
                        <nav className={Styles.WorkHerosNavSingle}>Digital Development</nav>
                    </div>
                </div>
                <div className={Styles.WorkHerosContainerListTwo}>
                    <div className={Styles.WorkHerosImages1}
                        onClick={() => handleImageClick("/ByZaraIWorks")}
                    ></div>
                    <div className={Styles.WorkHerosImages2}></div>
                    <div className={Styles.WorkHerosImages3}></div>
                    <div className={Styles.WorkHerosImages4}></div>
                    <div className={Styles.WorkHerosImages5}></div>
                    <div className={Styles.WorkHerosImages6}></div>
                    <div className={Styles.WorkHerosImages7}></div>
                    <div className={Styles.WorkHerosImages8}></div>
                </div>
            </div>





            <div className={Styles.WorkComponetFooters}>
                <div className={Styles.WorkComponetFooterOne}>
                    <div className={Styles.WorkComponetFooterChildOne}>
                        <h2 className={Styles.WorkComponetFooterH2}>Want to talk about a project?</h2>
                        <h4 className={Styles.WorkComponetFooterH4}>hello@drumroll.Digital</h4>
                    </div>
                </div>
                <div className={Styles.WorkComponetFooterTwo}>
                    <div className={Styles.WorkComponetFooterTwoChild}>
                        <h5 className={Styles.WorkComponetFooterFive}>Related Projects</h5>
                        <h5 className={Styles.WorkComponetFooterFive}>More Projects</h5>
                    </div>
                    <div className={Styles.WorkComponetFooterChildTwoss}>
                        <div className={Styles.WorkHerosImages222}></div>
                        <div className={Styles.WorkHerosImages2222}></div>
                        <div className={Styles.WorkHerosImages22222}></div>
                    </div>
                </div>
            </div>
            <Footers />
        </>
    );
};

export default WorkComponet;
