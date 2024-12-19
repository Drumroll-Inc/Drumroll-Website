import React from "react";
import { useNavigate as useRouterNavigate } from "react-router-dom";
import Styles from "./OpenNavbars.module.css";



interface OpenNavbarsProps {
    onClose: () => void;
}

export const OpenNavbars: React.FC<OpenNavbarsProps> = ({ onClose }) => {
    const navigate = useRouterNavigate();

    const handleNavigation = (path: string) => {
        navigate(path);
        onClose();
    };

    return (
        <div className={Styles.OpenNavbarsContainer}>
            <button className={Styles.CloseButton} onClick={onClose}>
                &times;
            </button>
            <div className={Styles.OpenNavbarsChildOne}>

                <div className={Styles.FootersItems}>
                    <ul className={Styles.FootersItemsUL}>
                        <li className={Styles.FooterItemsLI} onClick={() => handleNavigation("/")}>
                            <a href="#">Home</a>
                        </li>
                        <li className={Styles.FooterItemsLI}>
                            <a href="#">Services</a>
                        </li>


                        <li className={Styles.FooterItemsLI} onClick={() => handleNavigation("/")}>
                            <a href="#">About</a>
                        </li>
                        <li className={Styles.FooterItemsLI} onClick={() => handleNavigation("/WorkComponet")}>
                            <a href="#">Works</a>
                        </li>
                    </ul>
                </div>


                <ul className={Styles.FootersItemsUL2}>
                    <li className={Styles.FooterItemsLIs} onClick={() => handleNavigation("/IndetifyDesign")}>
                        <a href="#">Identity Design</a>
                    </li>
                    <li className={Styles.FooterItemsLIs} onClick={() => handleNavigation("ContentDevelopemts")}>
                        <a href="#">Content Strategy</a>
                    </li>
                    <li className={Styles.FooterItemsLIs} onClick={() => handleNavigation("/WebDevelopements")}>
                        <a href="#">Digital Development</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default OpenNavbars;
