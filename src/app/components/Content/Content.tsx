import React, { useState } from "react";
import styles from "./Content.module.scss";
import Button from "../Button/Button";
import background from "../../../../public/images/background.png";
import Image from "next/image";
import Popup from "../Pop-Up/PopUp"
const Content = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleWhitepaperClick = () => {
        window.location.href = "https://docs.parazone.io/";
    };

    return (
        <div className={styles.main}>
            <div className={styles.info_container}>
                <h4 className={styles.headline}>
                    <span className={styles.parazone}>PARAZONE</span>{" "}
                    <span className={styles.protocol}>Protocol</span>
                </h4>
                <h2 className={styles.title}>
                    Buy and trade on a{" "}
                    <span className={styles.decentralized}> World`s First Real Estate</span> Decentralized
                     Exchange
                </h2>
                <Button
                    defaultStyleForButton={false}
                    defaultStyleForName={false}
                    classNameForName={styles.button_text}
                    classNameButton={styles.launch_button}
                    name="Whitelist"
                    onClick={togglePopup}
                />
                <Button
                    defaultStyleForButton={false}
                    defaultStyleForName={false}
                    classNameButton={styles.paper_button}
                    name="Whitepaper"
                    onClick={handleWhitepaperClick}
                />
            </div>

            <Image
                src={background}
                alt={"background"}
                width={1920}
                height={508}
                className={styles.image_container}
            />

            {isPopupOpen && <Popup />}
        </div>
    );
};

export default Content;
