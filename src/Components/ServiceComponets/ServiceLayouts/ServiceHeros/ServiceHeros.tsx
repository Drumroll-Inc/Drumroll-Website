import React, { useRef, useState } from "react";
import Back1 from "../../../../assets/Back1.svg";
import Back2 from "../../../../assets/Back2.svg";
import Person1 from "../../../../assets/Person1.svg";
import Person2 from "../../../../assets/Person2.svg";
import Person3 from "../../../../assets/Person3.svg";
import Person4 from "../../../../assets/Person4.svg";
import Person5 from "../../../../assets/Person5.svg";
import Person6 from "../../../../assets/Person6.svg";
import Person7 from "../../../../assets/Person7.svg";
import Person8 from "../../../../assets/Person8.svg";
import Person9 from "../../../../assets/Person9.svg";
import Person10 from "../../../../assets/Person10.svg";
import Styles from "./ServiceHeros.module.css";


export const ServiceHeros: React.FC = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const images = [
        { person: Person1, back: Back1 },
        { person: Person2, back: Back2 },
        { person: Person3, back: null },
        { person: Person4, back: null },
        { person: Person5, back: null },
        { person: Person6, back: null },
        { person: Person7, back: null },
        { person: Person8, back: null },
        { person: Person9, back: null },
        { person: Person10, back: null },
    ];

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
            setCurrentIndex(Math.max(currentIndex - 1, 0));
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
            setCurrentIndex(Math.min(currentIndex + 1, images.length - 4));
        }
    };

    const handleMouseEnter = (index: number) => {
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
    };

    return (
        <div className={Styles.ServiceHerosContainer}>
            <div className={Styles.ServiceHerosChildOne}>
                <div className={Styles.ServiceHerosChilds}>
                    <h2 className={Styles.ServiceHerosH1}>Our Work Speaks for itself:</h2>
                    <h2 className={Styles.ServiceHerosH2}>Dive into Our Creative Showcase</h2>
                </div>
                <p className={Styles.ServiceHerosParagraph}>
                    Welcome to our portfolio, where creativity meets results. Here, you’ll find a curated selection of our finest projects, each a testament to our dedication, innovation, and expertise. We take pride in our ability to transform ideas into impactful realities. Explore the stories behind our work and discover how we’ve helped businesses like yours stand out and succeed.
                </p>
            </div>
            <div className={Styles.SliderContainer}>
                <div ref={sliderRef} className={Styles.ImageSlider}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={Styles.ImageWrapper}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <img
                                src={hoveredIndex === index && image.back ? image.back : image.person}
                                alt={`Person ${index + 1}`}
                                className={Styles.ServiceHeroImages}
                            />
                        </div>
                    ))}
                </div>
                <div className={Styles.SliderButtons}>
                    <button className={Styles.SliderButton} onClick={scrollLeft}>{"<"}</button>
                    <button className={Styles.SliderButton} onClick={scrollRight}>{">"}</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceHeros;
