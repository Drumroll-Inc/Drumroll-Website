import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Shapes from "../../../assets/Shape.svg";
import Navigate1 from "../../../assets/Navigate1.svg";
import Navigate2 from "../../../assets/Navigate2.svg";
import Navigate3 from "../../../assets/Navigate3.svg";
import Styles from "./HeroLayouts.module.css";


export const HeroLayouts: React.FC = () => {
    const navigate = useNavigate();
    const imageContainerRef = useRef<HTMLDivElement | null>(null);
    const [isScrolling, setIsScrolling] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null);

    const handleNavigation = (path: string) => {
        navigate(path);
    };

    const scrollImages = (deltaY: number) => {
        const container = imageContainerRef.current;
        if (!container) return;

        setIsScrolling(true);

        if (deltaY > 0) {
            if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
                setIsScrolling(false);
            } else {
                container.scrollTop += deltaY;
            }
        }

        else if (deltaY < 0) {
            if (container.scrollTop <= 0) {
                setIsScrolling(false);
            } else {
                container.scrollTop += deltaY;
            }
        }
    };

    const handleWheelScroll = (event: React.WheelEvent<HTMLDivElement>) => {
        if (isScrolling) return;

        const { deltaY } = event;
        scrollImages(deltaY);

        if (deltaY > 0 && scrollDirection !== "down") {
            setScrollDirection("down");
        } else if (deltaY < 0 && scrollDirection !== "up") {
            setScrollDirection("up");
        }
    };

    useEffect(() => {
        const container = imageContainerRef.current;
        if (!container) return;

        const autoScrollDown = setInterval(() => {
            if (container.scrollTop >= container.scrollHeight - container.clientHeight) {
                setScrollDirection("up");
            } else {
                container.scrollTop += 5;
            }
        }, 50);

        return () => clearInterval(autoScrollDown);
    }, []);

    return (
        <>
            <div className={Styles.HeroLayoutsContainer}>
                <div className={Styles.HeroLayoutsListmain}>
                    <div className={Styles.HeroLayoutsLists1}>
                        <h1 className={Styles.HeroLayoutH1}>DO YOU NEED</h1>
                    </div>
                    <div className={Styles.HeaderLayoutsImageConatiner}>
                        <img
                            src={Shapes}
                            alt="sharp images"
                            className={Styles.HeroLayoutSharpImage}
                        />
                        {/* Scrollable container */}
                        <div
                            className={Styles.HeroLayoutsListItems}
                            ref={imageContainerRef}
                            onWheel={handleWheelScroll} // Handle user scroll event
                        >
                            <img
                                src={Navigate1}
                                alt="Navigate to IndetifyDesign"
                                className={Styles.HeroLayoutImage}
                                onClick={() => handleNavigation("/IndetifyDesign")}
                            />
                            <img
                                src={Navigate2}
                                alt="Navigate to ContentDevelopemts"
                                className={Styles.HeroLayoutImage}
                                onClick={() => handleNavigation("/ContentDevelopemts")}
                            />
                            <img
                                src={Navigate3}
                                alt="Navigate to WebDevelopements"
                                className={Styles.HeroLayoutImage}
                                onClick={() => handleNavigation("/WebDevelopements")}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.HeroLayoutsImageDiv}></div>
        </>
    );
};

export default HeroLayouts;
