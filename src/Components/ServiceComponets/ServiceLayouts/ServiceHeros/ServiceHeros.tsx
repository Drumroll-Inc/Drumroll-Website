import React, { useRef, useState } from "react";
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
    const [clickedIndex, setClickedIndex] = useState<number | null>(null);

    const images = [Person1, Person2, Person3, Person4, Person5, Person6, Person7, Person8, Person9, Person10];

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

    const handleImageClick = (index: number) => {
        setClickedIndex(index === clickedIndex ? null : index);
    };

    return (
        <div className={Styles.ServiceHerosContainer}>
            <div className={Styles.ServiceHerosChildOne}>
                <div className={Styles.ServiceHerosChilds}>
                    <h2 className={Styles.ServiceHerosH1}>Our Work Speaks for itself:</h2>
                    <h2 className={Styles.ServiceHerosH2}>Dive into Our Creative Showcase</h2>
                </div>
                <p className={Styles.ServiceHerosParagraph}>
                    Welcome to our portfolio, where creativity meets results. Here, you’ll find a curated selection of our finest projects, each a testament to our dedication, innovation, and expertise.
                </p>
            </div>
            <div className={Styles.SliderContainer}>
                <div ref={sliderRef} className={Styles.ImageSlider}>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Person ${index + 1}`}
                            className={`${Styles.ServiceHeroImages} ${clickedIndex === index ? Styles.ActiveImage : ""
                                }`}
                            onClick={() => handleImageClick(index)}
                        />
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
