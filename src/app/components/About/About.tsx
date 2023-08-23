import React from "react";
import styles from "./about.module.scss";
import Button from "../Button/Button";
import Image from "next/image";
import content from "../../../../public/images/content_copy.svg"
import contract from "../../../../public/images/contract.svg"


const About = () => {

    return(

        <div className={styles.main}>

         <div className={styles.main_container}>
             <div>
               <div className={styles.number_ZP_container}>
                 <h6 className={styles.main_number}> 10B  </h6>

                 <Button
                     defaultStyleForButton={false}
                     defaultStyleForName={false}
                     classNameForName={styles.pz_text}
                     classNameButton={styles.pz_button}
                     name="PZT"
                 />
               </div>
                 <h3 className={styles.annotation}> Total Token Supply </h3>

             </div>

             <div>
                 <div className={styles.number_ZP_container}>
                 <h6 className={styles.main_number} > 500M </h6>

                 <Button
                     defaultStyleForButton={false}
                     defaultStyleForName={false}
                     classNameForName={styles.pz_text}
                     classNameButton={styles.pz_button}
                     name="PZT"
                 />
                 </div>
                 <h3  className={styles.annotation}> Total Seed Supply </h3>

             </div>

             <div> <h6 className={styles.main_number}> 1M </h6>   <h3  className={styles.annotation}> Total Seed Supply </h3> </div>
             <div> <h6 className={styles.main_number}> 10.000+ </h6>   <h3  className={styles.annotation}> Raised </h3> </div>



         </div>

            <div className={styles.button_container}>

                <div className={styles.address_button}>
                <Button
                    defaultStyleForButton={false}
                    defaultStyleForName={false}
                    classNameForName={styles.address_text}
                    classNameButton={styles.button}
                    name="Token Contract"
                />
                <Image
                    src={contract}
                    alt={"image"}
                    width={18}
                    height={20}
                    className={styles.image_container}
                />
            </div>

                <div className={styles.address_button}>
                    <Button
                        defaultStyleForButton={false}
                        defaultStyleForName={false}
                        classNameForName={styles.address_text}
                        classNameButton={styles.button_sec}
                        name="Address"
                    />
                    <Image
                        src={content}
                        alt={"image"}
                        width={18}
                        height={20}
                        className={styles.image_container}
                    />
                </div>


            </div>

            </div>





    )
}

export default About;