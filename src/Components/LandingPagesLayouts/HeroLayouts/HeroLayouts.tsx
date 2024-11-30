import React from "react";
import Styles from "./HeroLayouts.module.css";



export const HeroLayouts: React.FC = () => {
    return (
        <div className={Styles.HeroLayoutsContainer}>
            <div className={Styles.HeroLayoutsListmain}>
                <div className={Styles.HeroLayoutsLists1}>
                    <h1 className={Styles.HeroLayoutH1}>DO YOU NEED</h1>
                </div>
                <div className={Styles.HeroLayoutsListItems}>

                </div>
            </div>
            <div className={Styles.HeroLayoutsImageDiv}></div>
        </div>
    )
}

export default HeroLayouts;