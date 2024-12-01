import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosCloseCircle } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import BugarMeun from "../../../assets/BugarMeun.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";
import Drumrollogo from "../../../assets/Drumrollogo.svg";
import Styles from "./NavbarLayouts.module.css";


export const NavbarLayouts: React.FC = () => {
    const [activeLink, setActiveLink] = useState<string>("Home");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    const handleLinkClick = (linkName: string) => {
        setActiveLink(linkName);
        setIsMobileMenuOpen(false);
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    return (
        <div className={Styles.NavbarLayoutsContainers}>
            <div className={Styles.NavbarLayoutsContainerLists}>
                <img src={Drumrollogo} alt="Drumroll logo" className={Styles.NavbarLayoutsImage} />
                <div className={Styles.MobileMenuToggle} onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <IoIosCloseCircle className={Styles.CloseIcon} />
                    ) : (
                        <FiMenu className={Styles.HamburgerIcon} />
                    )}
                </div>
                <ul
                    className={`${Styles.NavbarLayoutsItemsLists} ${isMobileMenuOpen ? Styles.MobileMenuOpen : ""
                        }`}
                >
                    {["Home", "Service", "Work"].map((link) => (
                        <li
                            key={link}
                            className={`${Styles.NavbarLayoutsA} ${activeLink === link ? Styles.active : ""
                                }`}
                            onClick={() => handleLinkClick(link)}
                        >
                            <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                        </li>
                    ))}
                </ul>
                <div className={Styles.NavbarLayoutsItems}>
                    <img src={BugarMeun} alt="Icon Menu" className={Styles.NavbarLayoutsIconMeun} />
                    <h6 className={Styles.NavbarLayoutsMeunH6}>Menu</h6>
                    <span className={Styles.NavbarLayoutsSlish}>|</span>
                    <img src={SearchIcon} alt="Search Icon" className={Styles.NavbarLayoutsIconMeun} />
                    <span className={Styles.NavbarLayoutsSlish}>|</span>
                </div>
            </div>
        </div>
    );
};

export default NavbarLayouts;
