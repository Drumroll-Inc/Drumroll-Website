import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import OpenNavbars from "../OpenNavbars/OpenNavbars";
import { IoIosCloseCircle } from "react-icons/io";
import BugarMeun from "../../../assets/BugarMeun.svg";
import SearchIcon from "../../../assets/SearchIcon.svg";
import Drumrollogo from "../../../assets/Drumrollogo.svg";
import Styles from "./NavbarLayouts.module.css";


interface NavbarLayoutsProps {
    scrollToSection?: (section: string) => void;
}

export const NavbarLayouts: React.FC<NavbarLayoutsProps> = ({ scrollToSection }) => {
    const [activeLink, setActiveLink] = useState<string>("Home");
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const [isOpenNavbarsVisible, setIsOpenNavbarsVisible] = useState<boolean>(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/WorkComponet") {
            setActiveLink("Work");
        } else if (location.search.includes("Service")) {
            setActiveLink("Service");
        } else if (location.pathname === "/") {
            setActiveLink("Home");
        }
    }, [location]);

    const handleLinkClick = (linkName: string) => {
        setActiveLink(linkName);
        setHoveredLink(null);
        setIsMobileMenuOpen(false);

        if (linkName === "Work") {
            navigate("/WorkComponet");
        } else if (location.pathname !== "/") {
            navigate(`/?section=${linkName}`);
        } else if (scrollToSection) {
            scrollToSection(linkName);
        }
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prevState) => !prevState);
    };

    const toggleOpenNavbars = () => {
        setIsOpenNavbarsVisible((prevState) => !prevState);
    };

    return (
        <div className={Styles.NavbarLayoutsContainers}>
            <div className={Styles.NavbarLayoutsContainerLists}>
                <img
                    src={Drumrollogo}
                    alt="Drumroll logo"
                    className={Styles.NavbarLayoutsImage}
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                />
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
                            className={`${Styles.NavbarLayoutsA} ${hoveredLink === link
                                ? Styles.NavbarLayoutsHoveredLink
                                : activeLink === link
                                    ? Styles.NavbarLayoutsActiveLink
                                    : ""
                                }`}
                            onClick={() => handleLinkClick(link)}
                            onMouseEnter={() => setHoveredLink(link)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            {link}
                        </li>
                    ))}
                </ul>
                <div
                    className={`${Styles.NavbarLayoutsItems} ${isMobileMenuOpen
                        ? Styles.MobileMenuOpenItems
                        : Styles.HideOnMobile
                        }`}
                >
                    <img
                        src={BugarMeun}
                        alt="Icon Menu"
                        className={Styles.NavbarLayoutsIconMeun}
                        onClick={toggleOpenNavbars}
                    />
                    <h6 className={Styles.NavbarLayoutsMeunH6}>Menu</h6>
                    <span className={Styles.NavbarLayoutsSlish}>|</span>
                    <img
                        src={SearchIcon}
                        alt="Search Icon"
                        className={Styles.NavbarLayoutsIconMeun}
                    />
                    <span className={Styles.NavbarLayoutsSlish}>|</span>
                </div>
            </div>

            {isOpenNavbarsVisible && (
                <OpenNavbars onClose={toggleOpenNavbars} />
            )}
        </div>
    );
};

export default NavbarLayouts;
