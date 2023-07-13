import React from "react";
import styles from "../RoadMap/roadMap.module.scss";
import contract from "../../../../public/images/contract.svg";
import Image from "next/image";
import line1 from "../../../../public/images/line1.png";

const RoadMap = () => {
    return (
        <div className={styles.main}>

            <div className={styles.roadmap}>
                <h2 className={styles.text}>RoadMap</h2>
                    <Image
                        src={line1}
                        alt="image"
                        width={2800}
                        height={3}
                        className={styles.line1_container}
                    />
            </div>

            <div className={styles.container}>
                    <div className={styles.circles_container}>
                        <h2 className={styles.headline_text}>1st Year</h2>
                        <div className={styles.circle}></div>
                        <h2 className={styles.headline_text_1}>January - 2024</h2>
                        <h6 className={styles.text_1}>
                            The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                        </h6>
                    </div>
                    <div className={styles.circles_container}>
                        <h2 className={styles.headline_text_1}>February - 2024</h2>
                        <h6 className={styles.text_3}>
                            The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                        </h6>
                        <div className={styles.circle}></div>
                        <h2 className={styles.headline_text_bellow}>1st Year</h2>

                    </div>

                </div>
        </div>

    );
};

export default RoadMap;
