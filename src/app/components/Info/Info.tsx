import React from "react";
import styles from "./info.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import home from "../../../../public/images/home.svg";
import line from "../../../../public/images/line.svg"
import developers from "../../../../public/images/developers.svg"
import investors from "../../../../public/images/investors.svg"
import bank from "../../../../public/images/bank.svg"

const Info = () => {

    return(

        <div className={styles.main}>



         <div className={styles.first_container}>

           <div className={styles.text_container}>
              <h2 className={styles.headline}>  How it works </h2>
               <h1 className={styles.text}>  Real estate developers can easily upload their projects to Parazone's IDO Launchpad. They provide project details, and the system tokenizes the project using smart contracts, creating digital tokens representing shares in the project. All transactions are secure and recorded on the blockchain for transparency.
               </h1>
               <h1 className={styles.text}> Investors/traders can browse and buy project tokens on the Parazone DApp, making real estate investment more accessible. They can diversify their portfolio by acquiring tokens from various projects, reducing risk and gaining exposure to different property types and locations. The app offers real-time data on property performance, token values, and potential earnings. </h1>
           </div>

    <Image
        src={home}
        alt={"image"}
        width={596}
        height={447}
        className={styles.image_container}
    />



     </div>

            <Image
                src={line}
                alt={"line"}
                width={2000}
                height={1}
                className={styles.line}
            />

            <div className={styles.second_container}>
                <div className={styles.card}>
                    <Image
                        src={developers}
                        alt={"developers"}
                        width={496}
                        height={290}
                        className={styles.picture}
                    />
                    <h2 className={`${styles.headline_text} ${styles.realko}`}> Real-estate Developers </h2>

                    <div className={styles.marketplace_container}>
                    <Image
                    src={bank}
                    alt={"bank"}
                    width={74}
                    height={56}
                    className={styles.bank}
                    />

                        <h3 className={styles.headline_text_marketplace}> Parazone helps to </h3>
                        <h6 className={styles.marketplace_text}> Raise Full Investments Within Weeks  </h6>
                        <h6 className={styles.marketplace_text}> Simultaneously Implement Several Projects </h6>
                        <h6 className={styles.marketplace_text}> Global Market Exposure and Visibility </h6>
                        <h6 className={styles.marketplace_text}> Recurring Revenue on a Long-term </h6>
                        <h6 className={styles.marketplace_text}> Innovative Technological Integrations </h6>
                    </div>

                </div>

                <div className={styles.card}>
                    <Image
                        src={investors}
                        alt={"developers"}
                        width={496}
                        height={290}
                        className={styles.picture}
                    />
                    <h2 className={styles.headline_text}> Investors / Traders </h2>

                    <div className={styles.marketplace_container}>
                        <Image
                            src={bank}
                            alt={"bank"}
                            width={74}
                            height={56}
                            className={styles.bank}
                        />

                        <h3 className={styles.headline_text_marketplace}> Parazone helps to </h3>
                        <h6 className={styles.marketplace_text}>  Globally Diversified Portfolio </h6>
                        <h6 className={styles.marketplace_text}>  Quick and Secure Transactions </h6>
                        <h6 className={styles.marketplace_text}>  Participate in Real Asset-backed Funding </h6>
                        <h6 className={styles.marketplace_text}>  Flexible Investment Options for any Budget </h6>
                        <h6 className={styles.marketplace_text}>  Low-risk High Rewards Investment Opportunities </h6>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Info;