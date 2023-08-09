import React from "react";
import styles from "../Circle/circle.module.scss"
const FigmaCircle = () => {
    return (
        <div className={styles.circle}>
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 18 17">
            <circle cx="9.228" cy="8.47018"  stroke="#D9D9D9" strokeOpacity="0.2" strokeWidth="2.33053" />
            <circle cx="9.22814" cy="8.47033" r="4.96975" fill="#A44CD3" />
        </svg>
        </div>
    );
};

export default FigmaCircle;



