import React, { useState } from "react";
import Styles from "./OpenNavbars.module.css";



interface OpenNavbarsProps {
    onClose: () => void;
}

export const OpenNavbars: React.FC<OpenNavbarsProps> = ({ onClose }) => {
    const [showServicesMenu, setShowServicesMenu] = useState(false);

    const handleMouseEnter = () => setShowServicesMenu(true);
    const handleMouseLeave = () => setShowServicesMenu(false);

    return (
        <div className={Styles.OpenNavbarsContainer}>
            <button className={Styles.CloseButton} onClick={onClose}>
                &times;
            </button>

            <div className={Styles.OpenNavbarsChildOne}>
                <div className={Styles.FootersItems}>
                    <ul className={Styles.FootersItemsUL}>
                        <li className={Styles.FooterItemsLI}>
                            <a href="">Home</a>
                        </li>
                        <li
                            className={Styles.FooterItemsLI}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <a href="">Services</a>
                            {showServicesMenu && (<ul className={Styles.FootersItemsUL2}>
                                <li className={Styles.FooterItemsLI}><a href="">Services1</a></li>
                                <li className={Styles.FooterItemsLI}><a href="">Services2</a></li>
                                <li className={Styles.FooterItemsLI}><a href="">Services3</a></li>
                                <li className={Styles.FooterItemsLI}><a href="">Services4</a></li>
                            </ul>
                            )}
                        </li>
                        <li className={Styles.FooterItemsLI}><a href="">About</a></li>
                        <li className={Styles.FooterItemsLI}><a href="">Works</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default OpenNavbars;
