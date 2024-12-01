import React from "react";
import Styles from "./WorkHeaders.module.css";


export const WorkHeaders: React.FC = () => {
    return (
        <div className={Styles.WorkHeadersContainer}>
            <div className={Styles.WorkHeadersItems}>
                <h1 className={Styles.WorkHeadersItemsH1}>Project: BY ZARA IDENTITY design & DEVELOPMENT</h1>
                <p className={Styles.WorkHeadersItemsTexts}>
                    Drumroll Digital partnered with Debbo Africa to create a powerful brand identity that captures the essence of Debbo Health's mission in Africa.
                </p>
                <div className={Styles.WorkHeadersContainerTwo}>
                    <div className={Styles.WorkHeadersItems1}>
                        <h4 className={Styles.WorkHeadersH1}>Challenge:</h4>
                        <p className={Styles.WorkHeadersPara}>LuxeCo needed a refreshed brand identity to better reflect their luxurious product line and attract high-end customers.</p>
                    </div>
                    <div className={Styles.WorkHeadersItems1}>
                        <h4 className={Styles.WorkHeadersH1}>Solution:</h4>
                        <p className={Styles.WorkHeadersPara}>We crafted a sophisticated brand identity, complete with a new logo, color palette, and typography that exude elegance and exclusivity.</p>
                    </div>
                    <div className={Styles.WorkHeadersItems1}>
                        <h4 className={Styles.WorkHeadersH1}>Result:</h4>
                        <p className={Styles.WorkHeadersPara}>LuxeCo saw a 40% increase in customer engagement and a significant boost in sales.</p>
                    </div>
                </div>
            </div>
            <div className={Styles.WorkHeadersBottomBackground}></div>
        </div>
    )
}

export default WorkHeaders;