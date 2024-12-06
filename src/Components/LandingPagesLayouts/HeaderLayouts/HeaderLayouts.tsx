import React from "react";
import Styles from "./HeaderLayouts.module.css";


export const HeaderLayouts: React.FC = () => {
    return (
        <div className={Styles.HeaderLayoutsContainer}>
            <div className={Styles.HeaderLayoutsVideoContainer}>
                <video autoPlay loop muted
                    className={`${Styles.HeaderLayoutsVideo} ${Styles.DesktopOnly}`}>
                    <source src="/Streams/WebVersion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <video autoPlay loop muted
                    className={`${Styles.HeaderLayoutsVideo} ${Styles.MobileOnly}`}>
                    <source src="/Streams/MobileVersion.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className={Styles.HeaderLayoutsContainer2}>
                <h1 className={Styles.HeaderLayoutsH1}>DIGITAL SOLUTIONS THAT</h1>
                <h1 className={Styles.HeaderLayoutsH2}>ROCK</h1>
            </div>
        </div>
    );
};

export default HeaderLayouts;
