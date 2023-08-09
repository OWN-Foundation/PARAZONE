import React, { useState } from "react";
import styles from "./global.module.scss";
import map from "../../../../public/images/map.svg"
import background from "../../../../public/images/background.png";
import Image from "next/image";
import Circle from "../Circle/Circle"
const Global = () => {

    return (
        <div className={styles.main}>

            <div className={styles.title_container}>
                <h2 className={styles.main_text}> Globally distributed</h2>
                <h2 className={styles.second_text}>  decentralized infrastructure</h2>
                <h3 className={styles.description}> What makes Parazone so resilient? Enter the Parazone network, a decentralized data market powered by distributed participants: Indexers, Curators, Delegators, and Subgraph Developers. </h3>

            </div>

            <div className={styles.map_container}>
                <Image
                    src={map}
                    alt={"map"}
                    width={1200}
                    height={600}
                    className={styles.image_container}
                />
            </div>

           <div className={styles.circle}>    <Circle/>   </div>


        </div>
    );
};

export default Global;
