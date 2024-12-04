import React from "react";
import Icon1 from "../../../../assets/Icon1.svg";
import Icon2 from "../../../../assets/Icon2.svg";
import Icon3 from "../../../../assets/Icon3.svg";
import Icon4 from "../../../../assets/Icon4.svg";
import ServiceHeros from "../ServiceHeros/ServiceHeros";
import Footers from "../../../LandingPagesLayouts/Footers/Footers";
import NavbarLayouts from "../../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./IndetifyDesign.module.css";


export const IndetifyDesign: React.FC = () => {
    return (
        <>
            <NavbarLayouts />
            <div className={Styles.IndetifyDesignContainer}>
                <div className={Styles.IndetifyDesignContainerOne}>
                    <h1 className={Styles.IndetifyDesignH1}>Identity and Creative Brand Design</h1>
                    <div className={Styles.IndetifyDesignButtonPara}>
                        <button className={Styles.IndetifyDesignBTC}>Get Started</button>
                        <p className={Styles.IndetifyDesignParas}>
                            We believe that a strong brand identity is the cornerstone of any successful business. Our team
                            of creative experts works closely with you to develop a unique and compelling brand that resonates
                            with your target audience.
                        </p>
                    </div>
                    <div className={Styles.IndetifyDesignItems}>
                        <h4 className={Styles.IndetifyDesignItemsH4}>Our Process Includes:</h4>
                        <div className={Styles.IndetifyDesignItemsLists}>
                            <div className={Styles.IndetifyDesignItemsLists1}>
                                <img src={Icon1} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.IndetifyDesignItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.IndetifyDesignItemsLists1}>
                                <img src={Icon2} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.IndetifyDesignItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.IndetifyDesignItemsLists1}>
                                <img src={Icon3} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.IndetifyDesignItemsListsH4}>Discovery and Research</h4>
                            </div>
                            <div className={Styles.IndetifyDesignItemsLists1}>
                                <img src={Icon4} alt="Icon image" className={Styles.svgIcons} />
                                <h4 className={Styles.IndetifyDesignItemsListsH4}>Discovery and Research</h4>
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

export default IndetifyDesign;