import React, { useState } from "react";
import logo from "../../../../public/images/logo.svg";
import styles from './navbar.module.scss'
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";
import hamburger from "../../../../public/images/humburger.svg"
import miniLogo from "../../../../public/images/miniLogo.svg";
import Popup from "../Pop-Up/PopUp"

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    // const navigation = [
    //     { name: "Community", href: "/community", current: false },
    //     { name: "Developers", href: "/developers", current: false },
    //     { name: "Blog", href: "/blog", current: false },
    //     { name: "FAQ", href: "/FAQ", current: false },
    // ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div className={styles.header}>
                <Link href="/" legacyBehavior>
                    <div className={styles.logo}>
                        <Image src={logo} alt={"parazone logo"} width={140} height={30} />
                    </div>
                </Link>
                <div className={styles.hamburger}>
                    <Image src={ miniLogo} alt={"logo"} width={30} height={30}  />
                <button className={styles.burgerButton} onClick={toggleMenu}>
                        <Image src={hamburger} alt={"menu"} width={30} height={30} />
                </button>
                </div>

                <ul className={`${styles.navbar} ${isMenuOpen ? styles.menuOpen : ""}`}>
                    {/* {navigation.map((item, index) => (
                        <li key={index} className={styles.li}>
                            <Link href={item.href}>{item.name}</Link>
                        </li>
                    ))} */}
                    <li className={styles.li}>
                        <Link href="https://docs.parazone.io/">
                            <Button
                                defaultStyleForButton={false}
                                defaultStyleForName={false}
                                classNameButton={styles.paper_button}
                                name="Whitepaper"
                            />
                        </Link>
                    </li>
                    <li className={styles.li}>
                            <Button
                                defaultStyleForButton={false}
                                defaultStyleForName={false}
                                classNameButton={styles.launch_button}
                                onClick={togglePopup}
                                name="Launch App"
                            />
                    </li>
                </ul>
            </div>
            {isPopupOpen && <Popup />}
        </div>
    );
}

export default Navbar;
