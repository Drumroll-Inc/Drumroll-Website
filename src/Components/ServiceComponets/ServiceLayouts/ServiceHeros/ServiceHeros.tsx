import React from "react";
import Person1 from "../../../../assets/Person1.svg";
import Person2 from "../../../../assets/Person2.svg";
import Person3 from "../../../../assets/Person3.svg";
import Person4 from "../../../../assets/Person4.svg";
import Styles from "./ServiceHeros.module.css";



export const ServiceHeros: React.FC = () => {
    return (
        <div className={Styles.ServiceHerosContainer}>
            <div className={Styles.ServiceHerosChildOne}>
                <div className={Styles.ServiceHerosChilds}>
                    <h2 className={Styles.ServiceHerosH1}>Our Work Speaks for itself:</h2>
                    <h2 className={Styles.ServiceHerosH2}>Dive into Our Creative Showcase</h2>
                </div>
                <p className={Styles.ServiceHerosParagraph}>Welcome to our portfolio, where creativity meets results. Here, you’ll find a curated selection of our finest projects, each a testament to our dedication, innovation, and expertise. We take pride in our ability to transform ideas into impactful realities. Explore the stories behind our work and discover how we’ve helped businesses like yours stand out and succeed.</p>
            </div>
            <div className={Styles.ServiceHerosChildTwo}>
                <img src={Person1} alt="Person image Icon" className={Styles.ServiceHeroImages} />
                <img src={Person2} alt="Person image Icon" className={Styles.ServiceHeroImages} />
                <img src={Person3} alt="Person image Icon" className={Styles.ServiceHeroImages} />
                <img src={Person4} alt="Person image Icon" className={Styles.ServiceHeroImages} />
            </div>
        </div>
    )
}

export default ServiceHeros;