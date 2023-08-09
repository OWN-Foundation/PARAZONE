import React from "react";
import styles from "../RoadMap/roadMap.module.scss";
import contract from "../../../../public/images/contract.svg";
import Image from "next/image";
import line1 from "../../../../public/images/line1.png";
import arrow from "../../../../public/images/scrollArrow.svg"
import Circle from "@Paralax/app/components/Circle/Circle";
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
<div className={styles.body}>
            <div className={styles.container}>

                    <div className={styles.circles_container}>
                        <h2 className={styles.time_text}>1st Year</h2>
                        <div className={styles.circle}></div>
                        <h2 className={styles.date_text}>January - 2024</h2>
                        <h6 className={styles.description_text}>
                            The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                        </h6>
                    </div>


                    <div className={styles.circles_container}>
                        <h2 className={styles.date_text_1}>February - 2024</h2>
                        <h6 className={styles.description_text_1}>
                            The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                        </h6>
                        <div className={styles.circle_1}></div>
                        <h2 className={styles.time_text_1}>1st Year</h2>

                    </div>




                </div>
            <div className={styles.container}>

                <div className={styles.circles_container}>
                    <h2 className={styles.time_text}>1st Year</h2>
                    <div className={styles.circle}></div>
                    <h2 className={styles.date_text}>January - 2024</h2>
                    <h6 className={styles.description_text}>
                        The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                    </h6>
                </div>


                <div className={styles.circles_container}>
                    <h2 className={styles.date_text_1}>February - 2024</h2>
                    <h6 className={styles.description_text_1}>
                        The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
                    </h6>
                    <div className={styles.circle_1}></div>
                    <h2 className={styles.time_text_1}>1st Year</h2>

                </div>


            </div>

    <div className={styles.container}>

        <div className={styles.circles_container}>
            <h2 className={styles.time_text}>1st Year</h2>
            <div className={styles.circle}>    <Circle/>   </div>
            <h2 className={styles.date_text}>January - 2024</h2>
            <h6 className={styles.description_text}>
                The Uniswap token enables community ownership and active stewardship of the Protocol. UNI holders govern the Protocol governance process.
            </h6>
        </div>







    </div>
</div>


            <div className={styles.arrow_container}>
                <Image
                    src={arrow}
                    alt="image"
                    width={40}
                    height={40}
                    className={"cursor-pointer"}
                />
                <Image
                    src={arrow}
                    alt="image"
                    width={40}
                    height={40}
                    style={{ transform: "rotate(180deg)" }}
                    className={"cursor-pointer"}
                />

            </div>



        </div>

    );
};

export default RoadMap;
