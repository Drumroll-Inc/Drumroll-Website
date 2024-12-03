import React from "react";
import { useNavigate } from "react-router-dom";
import Navigate1 from "../../../assets/Navigate1.svg";
import Navigate2 from "../../../assets/Navigate2.svg";
import Navigate3 from "../../../assets/Navigate3.svg";
import Styles from "./HeroLayouts.module.css";


export const HeroLayouts: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    return (
        <div className={Styles.HeroLayoutsContainer}>
            <div className={Styles.HeroLayoutsListmain}>
                <div className={Styles.HeroLayoutsLists1}>
                    <h1 className={Styles.HeroLayoutH1}>DO YOU NEED</h1>
                </div>
                <div className={Styles.HeroLayoutsListItems}>
                    <img
                        src={Navigate1}
                        alt="Navigate to IndetifyDesign"
                        className={Styles.HeroLayoutImage}
                        onClick={() => handleNavigation("/IndetifyDesign")}
                    />
                    <img
                        src={Navigate2}
                        alt="Navigate to ContentDevelopemts"
                        className={Styles.HeroLayoutImage}
                        onClick={() => handleNavigation("/ContentDevelopemts")}
                    />
                    <img
                        src={Navigate3}
                        alt="Navigate to WebDevelopements"
                        className={Styles.HeroLayoutImage}
                        onClick={() => handleNavigation("/WebDevelopements")}
                    />
                </div>
            </div>
            <div className={Styles.HeroLayoutsImageDiv}></div>
        </div>
    );
};

export default HeroLayouts;
