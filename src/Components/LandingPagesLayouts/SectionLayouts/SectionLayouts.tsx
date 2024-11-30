import React from "react";
import Cards1 from "../../../assets/Card1.svg";
import Cards2 from "../../../assets/Card2.svg";
import Cards3 from "../../../assets/Card3.svg";
import Cards4 from "../../../assets/Card4.svg";
import Styles from "./SectionLayouts.module.css";


export const SectionLayouts: React.FC = () => {
    return (
        <div className={Styles.SectionLayoutsContainer}>
            <div className={Styles.SectionLayoutsMain1}>
                <h1 className={Styles.SectionLayoutsH1}>The Minds Behind the Magic</h1>
                <p className={Styles.SectionLayoutsParagraph}>Unveiling the Heart and Hustle of Drumroll's Exceptional Team – where passion meets expertise, and dedication intertwines with innovation. Each member brings a unique thread to the tapestry of our collective commitment to redefining services.</p>
            </div>
            <div className={Styles.SectionLayoutsMain2}>
                <div className={Styles.SectionLayoutsCards}>
                    <img src={Cards1} alt="Card Icon" className={Styles.CardsImages} />
                    <p className={Styles.CardsParagrah}>Lorem Inspumavec</p>
                    <h6 className={Styles.CardsTexts}>Product</h6>
                </div>
                <div className={Styles.SectionLayoutsCards}>
                    <img src={Cards2} alt="Card Icon" className={Styles.CardsImages} />
                    <p className={Styles.CardsParagrah}>Lorem Inspumavec</p>
                    <h6 className={Styles.CardsTexts}>Product</h6>
                </div>
                <div className={Styles.SectionLayoutsCards}>
                    <img src={Cards3} alt="Card Icon" className={Styles.CardsImages} />
                    <p className={Styles.CardsParagrah}>Lorem Inspumavec</p>
                    <h6 className={Styles.CardsTexts}>Product</h6>
                </div>
                <div className={Styles.SectionLayoutsCards}>
                    <img src={Cards4} alt="Card Icon" className={Styles.CardsImages} />
                    <p className={Styles.CardsParagrah}>Lorem Inspumavec</p>
                    <h6 className={Styles.CardsTexts}>Product</h6>
                </div>
            </div>
        </div>
    )
}

export default SectionLayouts;
