import React from "react";
import CompayLogo from "../../../assets/Drumrollogo.svg";
import Playstores1 from "../../../assets/Playstore1.svg";
import Playstores2 from "../../../assets/Playstore2.svg";
import Styles from "./Footers.module.css";


export const Footers: React.FC = () => {
    return (
        <div className={Styles.FootersContainer}>
            <div className={Styles.FootersContainers}>
                <div className={Styles.FootersList}>
                    <img src={CompayLogo} alt="Company Icon" className={Styles.FootersCompanyImg} />
                    <div className={Styles.FootersItems1}>
                        <h4 className={Styles.FootersItemsH4}>Download</h4>
                        <div className={Styles.FooterDivs}>
                            <img src={Playstores1} alt="Play store Icon" className={Styles.FooterDivsImgs} />
                            <img src={Playstores2} alt="Play store Icon" className={Styles.FooterDivsImgs} />
                        </div>
                    </div>
                </div>
                <div className={Styles.FootersItems}>
                    <ul className={Styles.FootersItemsUL}>
                        <li className={Styles.FooterItemsLI}><a href="">Home</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Livestream</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Artistes</a></li>
                    </ul>
                    <ul className={Styles.FootersItemsUL}>
                        <li className={Styles.FooterItemsLI}><a href="">Help Center</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Redeem</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">iOS</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Apple TV</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Roku</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Android</a></li>
                    </ul>
                    <ul className={Styles.FootersItemsUL}>
                        <li className={Styles.FooterItemsLI}><a href="">Instagram</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Twitter</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">LinkedIn</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Facebook</a></li>
                    </ul>
                </div>
            </div>
            <ul className={Styles.FooterLasts}>
                <li className={Styles.FooterItemsLI}><a href="">Terms & Conditions</a></li>
                <li className={Styles.FooterItemsLI}><a href="">Privacy Policy</a></li>
                <li className={Styles.FooterItemsLI}><a href="">© 2023, UduX Inc.</a></li>
            </ul>
        </div>
    )
}

export default Footers;