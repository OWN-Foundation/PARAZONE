import React, { useState } from "react";
import styles from "../Pop-Up/popUp.module.scss";
import Input from "../Input/input";
import Button from "@Paralax/app/components/Button/Button";

function Popup() {
    const [email, setEmail] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubscribe = () => {
        if (email !== "") {
            setIsPopupOpen(false);
        }
    };

    const handleClose = () => {
        setIsPopupOpen(false);
    };

    if (!isPopupOpen) {
        return null;
    }

    return (
        <>
            <div className={styles.background}></div> {/* Add a new background container */}
            <div className={styles.main}>
                <div className={styles.container}>
                    <h2 className={styles.heading}>Coming Soon!</h2>
                    <h3 className={styles.subheading}>
                        Please leave your email and we will contact you!
                    </h3>

                    <Input
                        defaultStyle={false}
                        type="text"
                        name="name"
                        className={styles.input}
                        placeholder="E-mail"
                        value={email}
                        onChange={handleEmailChange}
                    />



                    <Button
                        defaultStyleForButton={false}
                        defaultStyleForName={false}
                        classNameForName={styles.button_text}
                        classNameButton={styles.launch_button}
                        name="Subscribe"
                        onClick={handleClose}
                    />
                </div>
            </div>
        </>
    );
}

export default Popup;
