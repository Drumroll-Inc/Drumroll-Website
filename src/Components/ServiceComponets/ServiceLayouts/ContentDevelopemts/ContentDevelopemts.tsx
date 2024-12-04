import React from "react";
import Icon1 from "../../../../assets/Icon1.svg";
import Icon2 from "../../../../assets/Icon2.svg";
import Icon3 from "../../../../assets/Icon3.svg";
import Icon4 from "../../../../assets/Icon4.svg";
import ServiceHeros from "../ServiceHeros/ServiceHeros";
import Footers from "../../../LandingPagesLayouts/Footers/Footers";
import NavbarLayouts from "../../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./ContentDevelopemts.module.css"


export const ContentDevelopemts: React.FC = () => {

    return (
        <>
            <NavbarLayouts />
            <div className={Styles.ContentDevelopemtsContainer}>
                <div className={Styles.ContentDevelopemtsChildListOne}>
                    <h1 className={Styles.ContentDevelopemtsH1}>Content Strategy and  Development</h1>
                    <div className={Styles.ContentDevelopemtsButtonPara}>
                        <button className={Styles.ContentDevelopemtsBTC}>Get Started</button>
                        <p className={Styles.ContentDevelopemtsParas}>
                            We believe that a strong brand identity is the cornerstone of any successful business. Our team
                            of creative experts works closely with you to develop a unique and compelling brand that resonates
                            with your target audience.
                        </p>
                    </div>
                    <div className={Styles.ContentDevelopemtsItems}>
                        <h4 className={Styles.ContentDevelopemtsItemsH4}>Our Process Includes:</h4>
                        <div className={Styles.ContentDevelopemtsItemsLists}>
                            <div className={Styles.ContentDevelopemtsItemsLists1}>
                                <img src={Icon1} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.ContentDevelopemtsItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.ContentDevelopemtsItemsLists1}>
                                <img src={Icon2} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.ContentDevelopemtsItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.ContentDevelopemtsItemsLists1}>
                                <img src={Icon3} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.ContentDevelopemtsItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.ContentDevelopemtsItemsLists1}>
                                <img src={Icon4} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.ContentDevelopemtsItemsListsH4}>Discovery and Research</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceHeros />
            <Footers />
        </>
    )
}

export default ContentDevelopemts;