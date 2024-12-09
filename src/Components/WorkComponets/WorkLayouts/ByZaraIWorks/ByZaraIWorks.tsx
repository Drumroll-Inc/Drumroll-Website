import React from "react";
import Footers from "../../../LandingPagesLayouts/Footers/Footers";
import Navbar from "../../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
import Styles from "./ByZaraIWorks.module.css";


export const WorkHeaders: React.FC = () => {
    return (
        <>
            <Navbar />
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

            <div className={Styles.WorkHerosContainer}>
                <div className={Styles.WorkHerosContainerListOne}>
                    <h1 className={Styles.WorkHerosH1}>By Zara</h1>
                    <p className={Styles.WorkHerosParagrph}>Tagline/ description goes here</p>
                    <div className={Styles.WorkHerosNavList}>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>Brand Identity</nav>
                            <nav className={Styles.WorkHerosNav}>Strategy</nav>
                        </div>
                        <div className={Styles.WorkHerosNavListItem}>
                            <nav className={Styles.WorkHerosNav}>Packaging</nav>
                            <nav className={Styles.WorkHerosNav}>Motion Graphics</nav>
                        </div>
                        <nav className={Styles.WorkHerosNavSingle}>Photography</nav>
                    </div>
                </div>
                <div className={Styles.WorkHerosContainerListTwo}>
                    <div className={Styles.WorkHerosImageOne}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageTwo}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageThree}></div>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesOne}></div>
                        <div className={Styles.DivImagesTwo}></div>
                    </div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageFour}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosImageFive}></div>
                    <div className={Styles.WorkHerosImageSix}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundOne}></div>
                        <div className={Styles.DivImagesBackgroundTwo}></div>
                    </div>
                    <div className={Styles.WorkHerosImageSeven}></div>
                    <div className={Styles.WorkHerosImageEight}></div>
                    <p className={Styles.WorkHerosImageParagraph}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown pinter took a gallley of type and scrambled it to make a type spcim...
                    </p>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundThree}></div>
                        <div className={Styles.DivImagesBackgroundFour}></div>
                    </div>
                    <div className={Styles.WorkHerosImageNine}></div>
                    <div className={Styles.WorkHerosDivsImages}>
                        <div className={Styles.DivImagesBackgroundFive}></div>
                        <div className={Styles.DivImagesBackgroundSix}></div>
                    </div>
                    <div className={Styles.WorkHerosImageTen}></div>
                </div>
            </div>
            <Footers />
        </>
    )
}

export default WorkHeaders;




// import React, { useEffect, useState } from "react";
// import contentfulClient from "../../../../utils/contentfulClient";
// import Footers from "../../../LandingPagesLayouts/Footers/Footers";
// import Navbar from "../../../LandingPagesLayouts/NavbarLayouts/NavbarLayouts";
// import Styles from "./ByZaraIWorks.module.css";



// interface WorkHeadersContent {
//     title: string;
//     description: string;
//     challenges: string;
//     solution: string;
//     result: string;
//     services: string[];
// }

// export const WorkHeaders: React.FC = () => {
//     const [content, setContent] = useState<WorkHeadersContent | null>(null);

//     useEffect(() => {
//         const fetchContent = async () => {
//             try {
//                 const response = await contentfulClient.getEntries({
//                     content_type: "workHeaders", // Replace with your Contentful content type ID
//                 });
//                 if (response.items.length > 0) {
//                     const fields = response.items[0].fields;
//                     setContent({
//                         title: fields.title as string,
//                         description: fields.description as string,
//                         challenges: fields.challenges as string,
//                         solution: fields.solution as string,
//                         result: fields.result as string,
//                         services: fields.services as string[],
//                     });
//                 }
//             } catch (error) {
//                 console.error("Error fetching content:", error);
//             }
//         };

//         fetchContent();
//     }, []);

//     if (!content) return <p>Loading...</p>;

//     return (
//         <>
//             <Navbar />
//             <div className={Styles.WorkHeadersContainer}>
//                 <div className={Styles.WorkHeadersItems}>
//                     <h1 className={Styles.WorkHeadersItemsH1}>{content.title}</h1>
//                     <p className={Styles.WorkHeadersItemsTexts}>{content.description}</p>
//                     <div className={Styles.WorkHeadersContainerTwo}>
//                         <div className={Styles.WorkHeadersItems1}>
//                             <h4 className={Styles.WorkHeadersH1}>Challenge:</h4>
//                             <p className={Styles.WorkHeadersPara}>{content.challenges}</p>
//                         </div>
//                         <div className={Styles.WorkHeadersItems1}>
//                             <h4 className={Styles.WorkHeadersH1}>Solution:</h4>
//                             <p className={Styles.WorkHeadersPara}>{content.solution}</p>
//                         </div>
//                         <div className={Styles.WorkHeadersItems1}>
//                             <h4 className={Styles.WorkHeadersH1}>Result:</h4>
//                             <p className={Styles.WorkHeadersPara}>{content.result}</p>
//                         </div>
//                     </div>
//                 </div>
//                 <div className={Styles.WorkHeadersBottomBackground}></div>
//             </div>

//             <div className={Styles.WorkHerosContainer}>
//                 <div className={Styles.WorkHerosContainerListOne}>
//                     <h1 className={Styles.WorkHerosH1}>By Zara</h1>
//                     <p className={Styles.WorkHerosParagrph}>Tagline/ description goes here</p>
//                     <div className={Styles.WorkHerosNavList}>
//                         {content.services.map((service, index) => (
//                             <nav key={index} className={Styles.WorkHerosNav}>
//                                 {service}
//                             </nav>
//                         ))}
//                     </div>
//                 </div>
//                 {/* Additional content or images */}
//             </div>
//             <Footers />
//         </>
//     );
// };

// export default WorkHeaders;
