import React from "react";
import TopScrolLeft from "../../../assets/TopScrolLeft.svg";
import ButtonScrollLeft from "../../../assets/ButtonScrollLeft.svg";
import CentreScrollRight from "../../../assets/CentreScrollRight.svg";
import Styles from "./HeaderLayouts.module.css";


export const HeaderLayouts: React.FC = () => {
    return (
        <div className={Styles.HeaderLayoutsContainer}>
            <img src={TopScrolLeft} alt="Icon scroll letf" className={Styles.HeaderLayoutsImage} />
            <img src={CentreScrollRight} alt="Icon scroll right" className={Styles.HeaderLayoutsImage} />
            <img src={ButtonScrollLeft} alt="Icon scroll left" className={Styles.HeaderLayoutsImage} />
        </div>
    )
}

export default HeaderLayouts;