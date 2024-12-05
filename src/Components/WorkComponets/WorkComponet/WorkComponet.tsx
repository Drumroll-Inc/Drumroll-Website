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
                    <div
                        className={Styles.WorkHerosImages1}
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
            <Footers />
        </>
    );
};

export default WorkComponet;
