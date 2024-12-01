import React from "react";
import Styles from "./WorkHeros.module.css";


export const WorkHeros: React.FC = () => {
    return (
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt eveniet blanditiis fugiat ipsum veniam. Doloremque earum dicta magni. Nostrum odit harum expedita quo consectetur iure nulla enim corrupti voluptate.
                </p>
                <div className={Styles.WorkHerosImageOne}></div>
                <p className={Styles.WorkHerosImageParagraph}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nesciunt eveniet blanditiis fugiat ipsum veniam. Doloremque earum dicta magni. Nostrum odit harum expedita quo consectetur iure nulla enim corrupti voluptate.
                </p>
                <div className={Styles.WorkHerosImageOne}></div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default WorkHeros;