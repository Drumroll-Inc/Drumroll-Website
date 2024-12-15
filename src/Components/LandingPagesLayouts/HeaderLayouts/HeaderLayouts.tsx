import React, { useEffect, useState } from "react";
import Styles from "./HeaderLayouts.module.css";


const CLOUDINARY_BASE_URL = import.meta.env.VITE_CLOUDINARY_URL || "";
const WEB_VERSION_ID = import.meta.env.VITE_WEBVERSION_ID || "";
const MOBILE_VERSION_ID = import.meta.env.VITE_MOBILEVERSION_ID || "";

export const HeaderLayouts: React.FC = () => {
    const [webVideoUrl, setWebVideoUrl] = useState<string>("");
    const [mobileVideoUrl, setMobileVideoUrl] = useState<string>("");

    useEffect(() => {
        setWebVideoUrl(`${CLOUDINARY_BASE_URL}/video/upload/${WEB_VERSION_ID}.mp4`);
        setMobileVideoUrl(`${CLOUDINARY_BASE_URL}/video/upload/${MOBILE_VERSION_ID}.mp4`);
    }, []);

    return (
        <div className={Styles.HeaderLayoutsContainer}>
            <div className={Styles.HeaderLayoutsVideoContainer}>
                {webVideoUrl && (<video autoPlay loop muted
                    className={`${Styles.HeaderLayoutsVideo} ${Styles.DesktopOnly}`} >
                    <source src={webVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                )}
                {mobileVideoUrl && (<video autoPlay loop muted
                    className={`${Styles.HeaderLayoutsVideo} ${Styles.MobileOnly}`} >
                    <source src={mobileVideoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                )}
            </div>
            <div className={Styles.HeaderLayoutsContainer2}>
                <h1 className={Styles.HeaderLayoutsH1}>DIGITAL SOLUTIONS THAT</h1>
                <h1 className={Styles.HeaderLayoutsH2}>ROCK</h1>
            </div>
        </div>
    );
};

export default HeaderLayouts;
