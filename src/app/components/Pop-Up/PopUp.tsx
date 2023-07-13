import React from "react";
import styles from "../Pop-Up/popUp.module.scss";
import Input from "../Input/input";
import Button from "@Paralax/app/components/Button/Button";

function Popup() {
    return (
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
                />


            </div>
        </div>
    );
}

export default Popup;
