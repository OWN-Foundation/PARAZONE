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
               <h1 className={styles.text}> Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code.  </h1>
               <h1 className={styles.text}> Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps, tools, and activities on the Uniswap Protocol.  </h1>
               <h1 className={styles.text}> The Uniswap Protocol is managed by a global community of UNI token holders and delegates.  </h1>
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
                    <h2 className={styles.headline_text}> For developers </h2>

                    <div className={styles.marketplace_container}>
                    <Image
                    src={bank}
                    alt={"bank"}
                    width={74}
                    height={56}
                    className={styles.bank}
                    />

                        <h3 className={styles.headline_text_marketplace}> Marketplace </h3>
                        <h6 className={styles.marketplace_text}> Build Defi apps and tools on the largest crypto project on Ethereum. Get started with quick start guides, protocol documentation, a Javascript SDK, and fully open source code.  </h6>
                        <h6 className={styles.marketplace_text}> Get paid to build the future of finance. Uniswap Governance offers grant funding for people building apps, tools, and activities on the Uniswap Protocol.  </h6>
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
                    <h2 className={styles.headline_text}> For investors </h2>

                    <div className={styles.marketplace_container}>
                        <Image
                            src={bank}
                            alt={"bank"}
                            width={74}
                            height={56}
                            className={styles.bank}
                        />

                        <h3 className={styles.headline_text_marketplace}> Marketplace </h3>
                        <h6 className={styles.marketplace_text}> The Uniswap Protocol is an open-source protocol for providing liquidity and trading ERC20 tokens on accessible, and efficient exchange activity. The protocol is non-upgradable and designed to be censorship resistant.  </h6>
                        <h6 className={styles.marketplace_text}> The Uniswap Protocol is managed by a global community of UNI token holders and delegates.  </h6>
                    </div>
                </div>

            </div>
        </div>



    )
}

export default Info;