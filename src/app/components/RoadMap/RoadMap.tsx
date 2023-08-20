import React from "react";
import styles from "../RoadMap/roadMap.module.scss";
import contract from "../../../../public/images/contract.svg";
import Image from "next/image";
import line1 from "../../../../public/images/line1.png";
import arrow from "../../../../public/images/scrollArrow.svg"
import Circle from "@Paralax/app/components/Circle/Circle";
const RoadMap = () => {
    return (
        <div className={`${styles.main} scrollbar `}>

            <div className={styles.roadmap}>
                <h2 className={styles.text}>ROADMAP</h2>
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
                        <h2 className={styles.time_text}>1st Milestone</h2>
                        <div className={styles.circle}></div>
                        <h2 className={styles.date_text}> Q1 - 2023 </h2>
                        <h6 className={styles.description_text}>
                        Project Conceptualization, Market Research
                        </h6>
                    </div>


                    <div className={styles.circles_container}>
                        <h2 className={styles.date_text_1}>Q2 - 2023</h2>
                        <h6 className={styles.description_text_1}> 
                        Validate Proof of Concept, Early Adopters and Community Feedback
                        </h6>
                        <div className={styles.circle_1}></div>
                        <h2 className={styles.time_text_1}>2st Milestone</h2>

                    </div>




                </div>
            <div className={styles.container}>

                <div className={styles.circles_container}>
                    <h2 className={styles.time_text}>3st Milestone</h2>
                    <div className={styles.circle}></div>
                    <h2 className={styles.date_text}>Q3 - 2023</h2>
                    <h6 className={styles.description_text}>
                    Seed Funding Secured, Team Formation, MVP Development and Beta Testing.
                    </h6>
                </div>


                <div className={styles.circles_container}>
                    <h2 className={styles.date_text_1}>Q4 - 2023</h2>
                    <h6 className={styles.description_text_1}>
                    Beta Launch and Token Distribution, Expansion and Marketing,
                    </h6>
                    <div className={styles.circle_1}></div>
                    <h2 className={styles.time_text_1}>4st Milestone</h2>

                </div>


            </div>

    <div className={styles.container}>

        <div className={styles.circles_container}>
            <h2 className={styles.time_text}>5st Milestone</h2>
            <div className={styles.circle}>    <Circle/>   </div>
            <h2 className={styles.date_text}>Q1 - 2024</h2>
            <h6 className={styles.description_text}>
            Innovation and Global Reach, Mainnet Launch and Ecosystem Growth
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
